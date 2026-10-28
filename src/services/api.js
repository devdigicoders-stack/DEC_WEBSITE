export const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/+$/, '')

/**
 * Normalizes an image path to a full URL if it is stored in backend uploads.
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) return ''
  if (
    imagePath.startsWith('http://') ||
    imagePath.startsWith('https://') ||
    imagePath.startsWith('blob:') ||
    imagePath.startsWith('data:')
  ) {
    return imagePath
  }
  // Server uploads stored in backend /uploads
  if (imagePath.startsWith('/uploads') || imagePath.startsWith('uploads')) {
    const cleanBase = API_BASE_URL.replace(/\/api\/?$/, '')
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
    return `${cleanBase}${cleanPath}`
  }
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
}

/**
 * Fetch all active services for the public website.
 */
export const fetchServices = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/services?status=active&limit=100`)
    if (!response.ok) {
      throw new Error(`Failed to fetch services (HTTP ${response.status})`)
    }
    const data = await response.json()
    return data?.data || []
  } catch (error) {
    console.error('API fetchServices error:', error)
    throw error
  }
}

/**
 * Fetch all active projects for the public website.
 */
export const fetchProjects = async (params = {}) => {
  try {
    const query = new URLSearchParams()
    if (params.category && params.category !== 'All') {
      query.set('sector', params.category)
    }
    if (params.search) {
      query.set('search', params.search)
    }
    query.set('limit', params.limit || '150')
    query.set('status', 'active')

    const response = await fetch(`${API_BASE_URL}/projects?${query.toString()}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch projects (HTTP ${response.status})`)
    }
    const data = await response.json()
    return data?.data || []
  } catch (error) {
    console.error('API fetchProjects error:', error)
    throw error
  }
}

/**
 * Fetch project stats (counts per sector, total).
 */
export const fetchProjectStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/stats`)
    if (!response.ok) {
      throw new Error(`Failed to fetch project stats (HTTP ${response.status})`)
    }
    const data = await response.json()
    return data?.data || null
  } catch (error) {
    console.error('API fetchProjectStats error:', error)
    return null
  }
}

/**
 * Fetch all active gallery items for the public website.
 */
export const fetchGallery = async (params = {}) => {
  try {
    const query = new URLSearchParams()
    if (params.sector && params.sector !== 'All') {
      query.set('sector', params.sector)
    }
    query.set('limit', params.limit || '150')
    query.set('status', 'active')

    const response = await fetch(`${API_BASE_URL}/gallery?${query.toString()}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch gallery items (HTTP ${response.status})`)
    }
    const data = await response.json()
    return data?.data || []
  } catch (error) {
    console.error('API fetchGallery error:', error)
    throw error
  }
}

/**
 * Fetch published blog articles for the public website.
 */
export const fetchBlogPosts = async (params = {}) => {
  try {
    const query = new URLSearchParams()
    query.set('status', 'Published')
    if (params.category && params.category !== 'All') {
      query.set('category', params.category)
    }
    if (params.search) {
      query.set('search', params.search)
    }
    query.set('limit', params.limit || '100')

    const response = await fetch(`${API_BASE_URL}/blog?${query.toString()}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch blog articles (HTTP ${response.status})`)
    }
    const data = await response.json()
    return data?.data || []
  } catch (error) {
    console.error('API fetchBlogPosts error:', error)
    throw error
  }
}

/**
 * Fetch a single blog article by slug.
 */
export const fetchBlogPostBySlug = async (slug) => {
  if (!slug) return null
  try {
    const response = await fetch(`${API_BASE_URL}/blog/${slug}`)
    if (!response.ok) {
      if (response.status === 404) return null
      throw new Error(`Failed to fetch blog article (HTTP ${response.status})`)
    }
    const data = await response.json()
    return data?.data || null
  } catch (error) {
    console.error(`API fetchBlogPostBySlug (${slug}) error:`, error)
    throw error
  }
}

/**
 * Submit an inquiry (consultation, contact, career).
 */
export const submitInquiry = async (payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      throw new Error(`Failed to submit inquiry (HTTP ${response.status})`)
    }
    return await response.json()
  } catch (error) {
    console.error('API submitInquiry error:', error)
    throw error
  }
}

export default {
  API_BASE_URL,
  getImageUrl,
  fetchServices,
  fetchProjects,
  fetchProjectStats,
  fetchGallery,
  fetchBlogPosts,
  fetchBlogPostBySlug,
  submitInquiry
}
