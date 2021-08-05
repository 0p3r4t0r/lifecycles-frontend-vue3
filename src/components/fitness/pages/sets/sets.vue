<template>
    <h1>Sets</h1>
    <ul>
        <li v-for="(set, index) of sets" :key="'set-' + index">
            <Set :set="set"/>
        </li>
    </ul>
</template>

<script src="./Sets"></script>

