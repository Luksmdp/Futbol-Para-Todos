export interface Team {
    id: number;
    logo: string;
    name: string;
  }
  
  export interface TeamStats {
    wins: number;
    draws: number;
    games: number;
    loses: number;
    scoredGoals: number;
    receivedGoals: number;
  }
  
  export interface Standing {
    away: TeamStats;
    home: TeamStats;
    team: Team;
    total: TeamStats;
    points: number;
    position: number;
  }
  
  export interface LeagueData {
    groups: {
      name: string;
      standings: Standing[];
    }[];
    league: {
      id: number;
      logo: string;
      name: string;
      season: number;
    };
  }