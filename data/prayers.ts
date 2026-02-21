export interface Prayer {
    id: number;
    title: string;
    text: string;
}

export const prayerData: Prayer[] = [
    {
        id: 0,
        title: "Reggelli Imák",
        text: `
Lord Jesus Christ, Son of God,
have mercy on me, a sinner.

Amin.
        `
    },
    {
        id: 1,
        title: "Kis Lenyugvási",
        text: `
Dicsőség az Atyának és Fiúnak és Szent Léleknek.

Ámin.
`
    }
]