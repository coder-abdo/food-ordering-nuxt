<template>
  <main class="p-4 flex items-center justify-center">
    <section
      class="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:w-full"
    >
      <div class="relative h-1/3 w-full md:h-full md:w-1/2">
        <img src="/loginBg.png" alt="" class="object-cover" />
      </div>
      <div
        class="p-10 flex flex-col gap-8 md:w-1/2 justify-center items-center"
      >
        <h1 class="font-bold text-xl xl:text-3xl">Welcome</h1>
        <p>Log into your account or create a new one using social buttons</p>
        <button class="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
          <img
            src="/google.png"
            alt=""
            width="20"
            height="20"
            class="object-contain"
          />
          <span>Sign in with Google</span>
        </button>
        <button class="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
          <img
            src="/facebook.png"
            alt=""
            width="20"
            height="20"
            class="object-contain"
          />
          <span>Sign in with Facebook</span>
        </button>
        <p class="text-sm">
          Have a problem?<Link class="underline" href="/"> Contact us</Link>
        </p>
      </div>
    </section>
  </main>
</template>
