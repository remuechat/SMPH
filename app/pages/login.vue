<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <div class="flex-1 flex items-center justify-center p-6 md:p-12">
      <div class="w-full max-w-[560px] space-y-6 bg-white p-8 md:p-9 rounded-2xl shadow-xl shadow-slate-200/60 border border-outline"> 
 
        <!-- Logo and Name -->
         <div class="flex justify-center mb-8">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-md">
                <GraduationCap class="text-white w-6 h-6" />
              </div>
              <div class="font-extrabold tracking-tight text-[2rem] leading-none">
                <span class="text-primary">School</span><span class="text-accent">Master</span>
              </div>
            </div>
          </div>
                
        <!-- Page Header -->
          <header class="text-center space-y-1">
            <h1 class="text-3xl font-bold text-slate-900 tracking-tight leading-tight">Sign in to your account</h1>
            <p class="text-on-surface-variant font-medium">Enter your credentials to access the portal</p>
          </header>

        <!-- Login Form -->
        <form class="space-y-5" @submit.prevent>
          <div class="space-y-2">
            <label class="text-sm font-bold text-slate-700 ml-1" for="email">Email address</label>
          <input
              class="w-full px-4 py-3 text-slate-900 bg-slate-50/50 border border-outline focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl transition-all outline-none placeholder:text-slate-400"
              id="email"
              placeholder="name@school.edu"
              type="email"
            />
          </div>
          <div class="space-y-2">
            <div class="flex justify-between items-center px-1">
              <label class="text-sm font-bold text-slate-700" for="password">Password</label>
              <a class="text-xs font-bold text-primary hover:text-accent transition-colors" href="#">Forgot password?</a>
            </div>
            <div class="relative">
              <input
                  class="w-full px-4 py-3 text-slate-900 bg-slate-50/50 border border-outline focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl transition-all outline-none placeholder:text-slate-400"
                  id="password"
                  placeholder="••••••••"
                  :type="showPassword ? 'text' : 'password'"
                />
              <button 
                class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors cursor-pointer" 
                type="button"
                @click="showPassword = !showPassword"
              >
                <EyeOff v-if="showPassword" class="w-5 h-5" />
                <Eye v-else class="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div class="flex items-center gap-3 px-1">
            <button 
              type="button"
              @click="rememberMe = !rememberMe"
              class="w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer"
              :class="rememberMe ? 'bg-primary border-primary shadow-sm' : 'border-outline bg-white'"
            >
              <Check v-if="rememberMe" class="text-white w-3.5 h-3.5 stroke-[3px]" />
            </button>
            <label 
              class="text-sm font-medium text-slate-600 cursor-pointer select-none" 
              @click="rememberMe = !rememberMe"
            >
              Remember this device
            </label>
          </div>

          <button class="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 cursor-pointer" type="submit">
            Login to Dashboard
          </button>
        </form>

        <!-- Social/Alternative Sign-in Options -->
        <div class="space-y-6 pt-2">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-outline"></div>
            </div>
            <div class="relative flex justify-center text-xs uppercase tracking-widest">
              <span class="bg-white px-4 text-slate-400 font-bold">Or continue with</span>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-3">
            <button class="flex items-center justify-center gap-3 w-full py-3 px-4 border border-outline rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-sm text-slate-700 cursor-pointer">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.27.81-1.57z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
              </svg>
              Continue with Google
            </button>
            <button class="flex items-center justify-center gap-3 w-full py-3 px-4 border border-outline rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-sm text-slate-700 cursor-pointer">
              <Phone class="text-slate-500 w-[18px] h-[18px]" />
              Sign in with Phone Number
            </button>
          </div>
        </div>

        <p class="text-center text-sm text-on-surface-variant font-medium">
          Don't have an account? 
          <a class="text-primary font-bold hover:text-accent transition-colors ml-1.5" href="#">Contact administration</a>
        </p>
      </div>
    </div>

    <!-- Footer -->
     <footer class="mt-auto w-full py-6 border-t border-outline bg-white">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-on-surface-variant font-medium">© 2026 SchoolMaster. All rights reserved.</p>
        <div class="flex gap-8">
          <a class="text-xs text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a class="text-xs text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a class="text-xs text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Help Center</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { GraduationCap, Phone, Eye, EyeOff, Check } from 'lucide-vue-next';

const showPassword = ref(false);
const rememberMe = ref(false);
</script>

<style scoped>
/* Custom theme colors */
:deep() {
  --primary: #0038A8;
  --accent: #E6192E;
  --outline: #e2e8f0;
  --on-surface-variant: #64748b;
}

.text-primary { color: #0038A8; }
.text-accent { color: #E6192E; }
.bg-primary { background-color: #0038A8; }
.border-primary { border-color: #0038A8; }
.border-outline { border-color: #e2e8f0; }
.text-on-surface-variant { color: #64748b; }
.focus\:ring-primary\/20:focus { --tw-ring-color: rgba(0, 56, 168, 0.2); }
.focus\:border-primary:focus { border-color: #0038A8; }
.hover\:text-accent:hover { color: #E6192E; }
.shadow-primary\/20 { --tw-shadow-color: rgba(0, 56, 168, 0.2); }
</style>