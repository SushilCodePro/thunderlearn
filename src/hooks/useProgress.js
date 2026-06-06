import { useState, useCallback, useSyncExternalStore } from 'react'
import { mockUser } from '../data/mockUser'
import { getAllLessons } from '../data/mockCourses'

const STORAGE_KEY = 'thunderlearn-progress'
const THEME_KEY = 'thunderlearn-theme'
const XP_PER_LESSON = 50

export const defaultUserStats = {
  xp: 0,
  streak: 0,
  longestStreak: 0,
  level: 1,
}

export const defaultProgress = {
  completedLessons: [],
  dailyGoals: { lesson: false, streak: false, concept: false },
  quizScores: {},
  userStats: defaultUserStats,
}

const normalizeProgress = (data) => ({
  ...defaultProgress,
  ...data,
  completedLessons: data.completedLessons ?? [],
  dailyGoals: { ...defaultProgress.dailyGoals, ...data.dailyGoals },
  quizScores: data.quizScores ?? {},
  userStats: { ...defaultUserStats, ...data.userStats },
})

const getSnapshot = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? normalizeProgress(JSON.parse(stored)) : defaultProgress
  } catch {
    return defaultProgress
  }
}

const subscribe = (callback) => {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

const DOM_LESSON_IDS = new Set(['l14', 'l15', 'l16', 'dl1', 'dl2', 'dl3', 'dl4', 'dl5', 'dl6', 'dl7', 'dl8'])
const FUNCTION_LESSON_IDS = new Set(['l11', 'l12', 'l13'])
const ASYNC_LESSON_IDS = new Set(['l18', 'l19', 'al1', 'al2', 'al3', 'al4', 'al5', 'al6', 'al7', 'al8', 'al9', 'al10'])

export const isBadgeEarned = (badgeId, completedLessons, userStats) => {
  const totalLessons = getAllLessons().length
  switch (badgeId) {
    case 1:
      return completedLessons.length >= 1
    case 2:
      return userStats.streak >= 3
    case 3:
      return completedLessons.some((id) => DOM_LESSON_IDS.has(id))
    case 4:
      return completedLessons.some((id) => FUNCTION_LESSON_IDS.has(id))
    case 5:
      return completedLessons.some((id) => ASYNC_LESSON_IDS.has(id))
    case 6:
      return completedLessons.length >= totalLessons
    default:
      return false
  }
}

export const useProgress = () => {
  const [progress, setProgress] = useState(getSnapshot)

  const save = useCallback((next) => {
    setProgress(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new Event('storage'))
  }, [])

  const markLessonComplete = useCallback((lessonId) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev
      const next = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        dailyGoals: { ...prev.dailyGoals, lesson: true },
        userStats: {
          ...prev.userStats,
          xp: prev.userStats.xp + XP_PER_LESSON,
        },
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      window.dispatchEvent(new Event('storage'))
      return next
    })
  }, [])

  const isLessonComplete = useCallback(
    (lessonId) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons],
  )

  const saveQuizScore = useCallback((courseId, score, total) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        quizScores: { ...prev.quizScores, [courseId]: { score, total, date: new Date().toISOString() } },
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      window.dispatchEvent(new Event('storage'))
      return next
    })
  }, [])

  const resetAllProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setProgress(defaultProgress)
    window.dispatchEvent(new Event('storage'))
  }, [])

  const userStats = progress.userStats
  const earnedBadges = mockUser.badges.map((badge) => ({
    ...badge,
    earned: isBadgeEarned(badge.id, progress.completedLessons, userStats),
  }))

  return {
    progress,
    userStats,
    earnedBadges,
    save,
    markLessonComplete,
    isLessonComplete,
    saveQuizScore,
    resetAllProgress,
  }
}

export const useTheme = () => {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.getAttribute('data-theme') ?? 'dark',
    () => 'dark',
  )

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(THEME_KEY, next)
    window.dispatchEvent(new Event('storage'))
  }, [theme])

  return { theme, toggleTheme }
}

export const showXPToast = (amount) => {
  const existing = document.getElementById('xp-toast-container')
  const container = existing ?? (() => {
    const el = document.createElement('div')
    el.id = 'xp-toast-container'
    el.className = 'toast toast-end toast-bottom z-50'
    document.body.appendChild(el)
    return el
  })()

  const toast = document.createElement('div')
  toast.className = 'alert alert-warning shadow-lg animate-bounce'
  toast.innerHTML = `<span>⚡ +${amount} XP</span>`
  container.appendChild(toast)
  setTimeout(() => toast.remove(), 2500)
}
