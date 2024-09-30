export interface ConfigItem {
    
        id: number;
        name: string;
        data: {
            title?: string;
            description?: string;
            detail?: string;
            url?: string;
            developer?: string;
            buttontext?: string;
            Iconblocks?: {
                id: number;
                icon: string;
                title: string;
                description: string;
            }[];
            companyBlocks?: {
                id: number;
                Image: string;
                name: string;
            }[];
            galleryBlocks?: {
                id: number;
                url: string;
                name: string;
            }[];
            pricingBlocks?: {
                id: number;
                Description: string;
                title: string;
                subTitle: string;
                currency: string;
                price: number;
                featured: boolean;
                Downloads: string;
                Extensions: string;
                Tutorials: string;
                Support: string;
                updates: string;
                buttontext: string;
            }[];
            feedbacks?: {
                name: string;
                userimage: string;
                comments: string;
            }[];
            socialMedia?: {
                id: number;
                title: string;
                target: string;
                username: string;
                url: string;
                icon: string;
            }[];
        }
   
}
