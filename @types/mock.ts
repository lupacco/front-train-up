import { Exercise, User, Workout } from "./types";

export const users: User[] = [
    {
        id: "aa2bc0c3-45cd-4a10-ad10-109c0a0d03da",
        username: "lucas",
        email: "lucas@email.com",
        name: "Lucas pagotto",
        password: "senha", //todo remove
        birthdate: new Date("1999-04-20")
    },
    {
        id: "bb2bc0c3-45cd-4a10-ad10-109c0a0d03db",
        username: "henry",
        email: "henry@email.com",
        name: "Pedro Henrique",
        password: "senha",
        birthdate: new Date("2000-06-10")
    }

]

export const workouts: Workout[] = [
    {
        name: "biceps"
    },
    {
        name: "peito"
    },
    {
        name: "triceps"
    },
    {
        name: "perna"
    },
    {
        name: "ombro"
    },
    {
        name: "costas"
    },
    {
        name: "peito 2"
    },
    {
        name: "biceps 2"
    },
    {
        name: "biceps 3"
    },
    ]

export const exercises: Exercise[] = [
    {
        name: "Exerciseee",
        series: 4,
        reps: [12, 10, 10, 8],
        weight: [10, 12, 15, 17.5]
    },
    {
        name: "Exercise",
        series: 4,
        reps: [12, 10, 10, 8],
        weight: [10, 12, 15, 17.5]
    },
    {
        name: "Exercise",
        series: 4,
        reps: [12, 10, 10, 8],
        weight: [10, 12, 15, 17.5]
    },
    {
        name: "Exercise",
        series: 4,
        reps: [12, 10, 10, 8],
        weight: [10, 12, 15, 17.5]
    },
    {
        name: "Exercise",
        series: 4,
        reps: [12, 10, 10, 8],
        weight: [10, 12, 15, 17.5]
    },
    {
        name: "Exercise",
        series: 4,
        reps: [12, 10, 10, 8],
        weight: [10, 12, 15, 17.5]
    },
]