<template>
    <h1>Exercises</h1>
    <ul>
        <li v-for="(exercise, index) of exercises" :key="'exercise-' + index">
            <Exercise :exercise="exercise"/>
        </li>
    </ul>
</template>

<script src="./Exercises"></script>

