const base = '/api/fitness'

enum Version {
    V1 = 'v1',
}

enum Resources {
    Exercises = 'exercises',
    Sets = 'sets'
}

const endpoints = {
    exercises: [base, Version.V1, Resources.Exercises].join('/'),
    sets: [base, Version.V1, Resources.Sets].join('/'),
}

export default endpoints;