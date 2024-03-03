export interface UserReview {
    person: string
    review: string
}

export type SlideName = "Lashes" | "Brows";

interface SlideData {
    images: string[]
    title: string
    subtitle: string
    button: string
    link: string
}

export const text = {
    copyright: "© My Lashes 2024. All Rights Reserved",
    book: "Book Now",

    seeMoreReviews: "See More Reviews",
    reviewSection: "Reviews",
    reviewSectionSubtitle: "Most recent feedback",

    galleryTitle: "Gallery",
    gallerySubtitle: "View our results",
    instagramFollow: "See More on Instagram",
}

export const urls = {
    instagram: "https://instagram.com",
    square: "https://squareup.com/us/en/appointments"
}

export const headerLinks : {
    link : string
    text : string
}[] = [
    {
        text: "Brows",
        link: "./brows"
    }, 
    {
        text: "Lashes",
        link: "./lashes"
    }, 
    {
        text: "Reviews",
        link: "./reviews"
    },
    {
        text: "Instagram",
        link: urls.instagram
    }
];

export const slides : Record<SlideName,SlideData> = {
    Lashes : {
        images: [
            "https://imageio.forbes.com/specials-images/imageserve/5fd5a7ded76200e0013c6055/white-young-woman-with-eyelash-extensions/0x0.jpg?format=jpg&crop=3448,1616,x0,y39,safe&width=960",
            "https://imageio.forbes.com/specials-images/imageserve/5fd5a7ded76200e0013c6055/white-young-woman-with-eyelash-extensions/0x0.jpg?format=jpg&crop=3448,1616,x0,y39,safe&width=960",
        ],
        title: "Eyelashes",
        subtitle: "Extensions & More",
        button: "See More",
        link: "./lashes"
    },
    Brows: {
        images: [
            "https://imageio.forbes.com/specials-images/imageserve/5fd5a7ded76200e0013c6055/white-young-woman-with-eyelash-extensions/0x0.jpg?format=jpg&crop=3448,1616,x0,y39,safe&width=960",
        ],
        title: "Brows",
        subtitle: "Brow Shaping & More",
        button: "See More",
        link: "./brows"
    }
}

export const reviews : UserReview[] = [
    {
        person: "Person 1",
        review: "This is a short review"
    },
    {
        person: "Person 2",
        review: "This is a very long review about how much I liked this product. And this review is so long that it will take up multiple lines of this box but dont worry the formating will look very good regardless."
    },
    {
        person: "Person 3",
        review: "This is another short review"
    },
    {
        person: "Person",
        review: "review"
    },
    {
        person: "Person",
        review: "review"
    },
    {
        person: "Person",
        review: "review"
    },
    {
        person: "Person",
        review: "review"
    },
    {
        person: "Person",
        review: "review"
    },
    {
        person: "Person",
        review: "review"
    },
]

export const gallery : string[] = [
    "https://www.kissusa.com/cdn/shop/files/2023-09-19_55b9df14-04eb-4750-bec6-cc6b22b15546.png?v=1695160044&width=1500",
    "https://www.kissusa.com/cdn/shop/files/2023-09-19_55b9df14-04eb-4750-bec6-cc6b22b15546.png?v=1695160044&width=1500",
    "https://www.kissusa.com/cdn/shop/files/2023-09-19_55b9df14-04eb-4750-bec6-cc6b22b15546.png?v=1695160044&width=1500",
    "https://www.lotuslashes.com/cdn/shop/products/4_869d80fe-8a94-4ad2-b009-cde83e43f996_2400x.png?v=1597102967",
    "https://www.kissusa.com/cdn/shop/files/2023-09-19_55b9df14-04eb-4750-bec6-cc6b22b15546.png?v=1695160044&width=1500",
    "https://www.lotuslashes.com/cdn/shop/products/4_869d80fe-8a94-4ad2-b009-cde83e43f996_2400x.png?v=1597102967",
    "https://www.lotuslashes.com/cdn/shop/products/4_869d80fe-8a94-4ad2-b009-cde83e43f996_2400x.png?v=1597102967",
    "https://www.lotuslashes.com/cdn/shop/products/4_869d80fe-8a94-4ad2-b009-cde83e43f996_2400x.png?v=1597102967",
    "https://www.kissusa.com/cdn/shop/files/2023-09-19_55b9df14-04eb-4750-bec6-cc6b22b15546.png?v=1695160044&width=1500",
    "https://www.lotuslashes.com/cdn/shop/products/4_869d80fe-8a94-4ad2-b009-cde83e43f996_2400x.png?v=1597102967",
]