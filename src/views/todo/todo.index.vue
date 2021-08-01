<template>
  <DefaultLayout>
    <div>
      <font-awesome-icon icon="home" />
      <h1>Hiiiiiiiii</h1>
      <Home :textData="'Good Luck'" @myEvent="getData"/>
      <b-table striped hover :items="listTodo" />
    </div>
  </DefaultLayout>
</template>
<script src="./todo.index.controller.ts" />
