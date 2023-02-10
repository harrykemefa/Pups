<template>
    <div class="flex items-center justify-center my-20">
        <div class="spinner"></div>
    </div>
  
</template>

<style lang="css">

.spinner {
   display: flex;
   align-items: center;
   width: 84px;
   height: 56px;
}

.spinner::before,
.spinner::after {
   --radius: 250;
   content: '';
   position: absolute;
   width: 100%;
   height: 100%;
   animation: spinner-w7nm60 2s infinite linear;
   background: #474bff;
   border-radius: 50%;
}

.spinner::before {
   --radius: -250;
   background: #dbdcef;
}

@keyframes spinner-w7nm60 {
   0% {
      transform: scale(1) rotate(0deg) translateY(calc(var(--radius) * 1%));
   }

   50% {
      transform: scale(0.5) rotate(1440deg) translateY(0);
   }

   100% {
      transform: scale(1) rotate(2920deg) translateY(calc(var(--radius) * 1%));
   }
}
</style>