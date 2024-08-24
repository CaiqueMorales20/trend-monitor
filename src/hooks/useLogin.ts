import { useMutation } from '@tanstack/react-query'

import { login } from '@/utils/login'

function useLogin() {
  const { data, mutateAsync, isPending, isError } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  })

  return { data, isPending, isError, mutateAsync }
}

export { useLogin }
