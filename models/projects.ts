export interface ProjectTag {
  createdAt: Date
  createdBy: number
  deletedAt: null
  deletedBy: null
  depth: null
  description: string
  id: number
  lft: number
  options: null
  organizationId: null
  parentId: number | null
  rgt: number
  slug: string
  sortOrder: number
  status: number
  title: string
  updatedAt: Date
  updatedBy: number
  url: string
  pivot?: {
    adId: number
    categoryId: number
  }
}

export interface Project {
  bids?: Proposal[]
  categories?: ProjectTag[]
  checked: string
  cityId: number
  countryId: number
  createdAt: Date
  createdBy: number
  defaultPrice: number
  deletedAt: null
  deletedBy: null
  description: string
  entityTitle: string
  featured: number
  fields: any[]
  files?: File[]
  id: number
  lat: null
  lng: null
  maxPrice: number
  mediaFiles: MediaFiles
  mediasMulti: MediasMulti
  mediasSingle: any[]
  minPrice: number
  neighborhoodId: null
  options: null
  organizationId: null
  provinceId: number
  slug: string
  sortOrder: number
  status: number
  statusName: string
  title: string
  updatedAt: Date
  updatedBy: number
  uploadedAt: Date
  url: string
  userId: number

  user?: UserInfo
}

export interface Proposal {
  adId: number //id del proyecto
  amount: number
  createdAt: Date
  createdBy: number
  currency: string
  deletedAt: null
  deletedBy: null
  deliveryDays: number
  description: string
  id: number
  options: null
  organizationId: null
  selected: number
  statusId: number
  statusLabel: StatusLabel
  updatedAt: Date
  updatedBy: number
}

export interface StatusLabel {
  title: string
}

export interface File {
  id: number | null
  filename: null | string
  mimeType: null | string
  fileSize: null | string
  path: string
  relativePath: string
  isImage: boolean
  isVideo: boolean
  isFolder: boolean
  mediaType: string
  folderId: null | string
  description: null
  alt: null
  keywords: null
  createdBy: number | null
  createdAt: Date | null
  updatedAt: Date | null
  faIcon: string
  disk: null | string
  extension: null | string
  zone?: string
  url: string
  tags: any[]
  thumbnails: Thumbnail[]
  smallThumb: string
  relativeSmallThumb: string
  mediumThumb: string
  relativeMediumThumb: string
  largeThumb: string
  relativeLargeThumb: string
  extraLargeThumb: string
  relativeExtraLargeThumb: string
}

export interface Thumbnail {
  name: string
  path: string
  size: string
}

export interface MediaFiles {
  mainimage: File
  secondaryimage: File
  gallery: File[]
  videos: any[]
}

export interface MediasMulti {
  gallery: Gallery
  videos: Gallery
}

export interface Gallery {
  files: number[]
}

export interface UserInfo {
  createdAt: Date
  createdBy: number
  deletedAt: null
  deletedBy: null
  email: string
  firstName: string
  id: number
  isGuest: number
  language: null
  lastLogin: Date
  lastName: string
  organizationId: null
  permissions: any[] | null
  phone: null | string
  timezone: null
  updatedAt: Date
  updatedBy: number
  userName: null
}
