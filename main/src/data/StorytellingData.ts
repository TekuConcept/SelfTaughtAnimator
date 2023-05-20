import { CData } from "./CurriculumData"

export const storytellingData: CData = {
    name: 'Storytelling',
    terms: [
        {
            theme: {
                pallet: [ '#555555', '#FFFFFF', '#fff9ff', '#db0e7b', '#018291', '#feeffe' ],
                general: { text: 0, back: 1 },
                accent: 2,
                term: 3,
                arrow: { text: 3, back: 1 },
                note: { text: 1, back: 4 },
                challenge: { back: 5 },
                challengeHeading: { text: 1, back: 4 },
                title: 4,
                brief: 3
            },
            units: [
                {
                    title: 'Unit Example',
                    subtitle: 'Legend',
                    brief: { name: 'Primary Study Material' },
                    references: [
                        {
                            category: 'Category 1',
                            sources: [
                                { text: 'Secondary Source 1' },
                                { text: 'Secondary Source 2' }
                            ]
                        },
                        {
                            category: 'Category 2',
                            sources: [
                                { text: 'Secondary Source 3' },
                                { text: '- Sub-Secondary Source' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Challenge 1',
                            sub: [
                                { text: 'Sub-Challenge 1' },
                                { text: 'Sub-Challenge 2' }
                            ]
                        },
                        { name: 'Challenge 2' }
                    ],
                    notes: 'This is an example unit. Notes for the unit are provided here. Each unit should be studied for at least one week to be effective. Challenges provide some guidence for what to do and an opportunit to push oneself. Don\'t worry if you are unable to complete the challenges within the week.'
                }
            ]
        }
    ]
}