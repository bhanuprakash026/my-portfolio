export interface WorkExperience {
    title: string;
    location: string;
    description: string;
    icon: React.ReactNode;
    date: string;
    type: string;
    details?: {
        company: string;
        duration: string;
        location: string;
        techStack:ReadonlyArray<{ icon: React.ReactNode; name: string }>
        rolesAndResponsibilities: string[];
        challenges: string[];
    }

}

export interface ProjectExperience {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    details?: {
        features: string[]
    }

}
