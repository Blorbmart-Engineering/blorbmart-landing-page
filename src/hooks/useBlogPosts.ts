import { useEffect, useState } from 'react'
import { getAllPosts, getPostBySlug, getRecentPosts } from '../lib/blog'
import type { BlogPost } from '../types/blog'

type BlogState<T> = {
  data: T
  isLoading: boolean
}

export function useAllPosts() {
  const [state, setState] = useState<BlogState<BlogPost[]>>({
    data: [],
    isLoading: true,
  })

  useEffect(() => {
    let mounted = true

    getAllPosts().then((posts) => {
      if (mounted) {
        setState({ data: posts, isLoading: false })
      }
    })

    return () => {
      mounted = false
    }
  }, [])

  return state
}

export function useRecentPosts(limit = 3) {
  const [state, setState] = useState<BlogState<BlogPost[]>>({
    data: [],
    isLoading: true,
  })

  useEffect(() => {
    let mounted = true

    getRecentPosts(limit).then((posts) => {
      if (mounted) {
        setState({ data: posts, isLoading: false })
      }
    })

    return () => {
      mounted = false
    }
  }, [limit])

  return state
}

export function useBlogPost(slug?: string) {
  const [state, setState] = useState<BlogState<BlogPost | null>>({
    data: null,
    isLoading: true,
  })

  useEffect(() => {
    let mounted = true

    if (!slug) {
      setState({ data: null, isLoading: false })
      return () => {
        mounted = false
      }
    }

    getPostBySlug(slug).then((post) => {
      if (mounted) {
        setState({ data: post, isLoading: false })
      }
    })

    return () => {
      mounted = false
    }
  }, [slug])

  return state
}
