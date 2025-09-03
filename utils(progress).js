// utils/progress.js
// Progress and gamification utility functions

export const calculateLevel = (xp) => {
  return Math.floor(xp / 100) + 1;
};

export const calculateXPForNextLevel = (xp) => {
  const currentLevel = calculateLevel(xp);
  const nextLevelXP = currentLevel * 100;
  return nextLevelXP - xp;
};

export const addExperience = (currentProgress, xpToAdd) => {
  const newXP = currentProgress.xp + xpToAdd;
  const newLevel = calculateLevel(newXP);
  const leveledUp = newLevel > currentProgress.level;
  
  return {
    ...currentProgress,
    xp: newXP,
    level: newLevel,
    leveledUp
  };
};

export const updateStreak = (currentProgress, completedToday = true) => {
  if (completedToday) {
    return {
      ...currentProgress,
      streak: currentProgress.streak + 1,
      lastActivityDate: new Date().toDateString()
    };
  } else {
    return {
      ...currentProgress,
      streak: 0
    };
  }
};

export const getStreakStatus = (lastActivityDate) => {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  
  if (lastActivityDate === today) {
    return 'active';
  } else if (lastActivityDate === yesterday) {
    return 'can_continue';
  } else {
    return 'broken';
  }
};

export const achievementTypes = {
  FIRST_LESSON: 'first_lesson',
  STREAK_7: 'streak_7',
  STREAK_30: 'streak_30',
  LEVEL_5: 'level_5',
  LEVEL_10: 'level_10',
  XP_1000: 'xp_1000'
};

export const checkAchievements = (progress) => {
  const achievements = [];
  
  if (progress.level >= 5) achievements.push(achievementTypes.LEVEL_5);
  if (progress.level >= 10) achievements.push(achievementTypes.LEVEL_10);
  if (progress.xp >= 1000) achievements.push(achievementTypes.XP_1000);
  if (progress.streak >= 7) achievements.push(achievementTypes.STREAK_7);
  if (progress.streak >= 30) achievements.push(achievementTypes.STREAK_30);
  
  return achievements;
};