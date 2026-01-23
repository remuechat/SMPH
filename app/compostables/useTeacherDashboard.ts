import { createSharedComposable } from '@vueuse/core'

const _useTeacherDashboard = () => {
    const route = useRoute()
    const router = useRouter()
    const isNotificationsSlideoverOpen= ref(false)

    defineShortcuts({
        'g-h': () => router.push('teacher'),
        'g-i': () => router.push('teacher/gradebook')
    })

    watch(() => route.fullPath, () => {
        isNotificationsSlideoverOpen.value = false
    })

    return {
        isNotificationsSlideoverOpen
    }
}

export const useTeacherDashboard = createSharedComposable(_useTeacherDashboard)