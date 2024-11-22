export interface UserData {
  id: number
  firstName: string
  lastName: string
  fullName: string
  isActivated: string
  email: string
  permissions: any[]
  createdAt: Date
  updatedAt: Date
  lastLoginDate: Date
  smallImage: string
  mediumImage: string
  mainImage: string
  contacts: Contacts
  socialNetworks: Contacts
  departments: Department[]
  organizations: any[]
  settings: any[]
  fields: any[]
  addresses: any[]
  roles: Role[]
  allPermissions: Permissions
  allSettings: AllSettings
  files: any[]
  skills?: UserSkill[]
  mediaFiles: MediaFiles
}

export interface Permissions {
  [key: string]: boolean
}

export interface AllSettings {
  assignedSettings: string[]
}

export interface Contacts {
  name: string
  value: any[]
}

export interface Department {
  createdAt: Date
  createdBy: null
  deletedAt: null
  deletedBy: null
  depth: null
  id: number
  isInternal: number
  lft: null
  options: null
  organizationId: null
  parentId: number
  pivot: DepartmentPivot
  rgt: null
  title: string
  updatedAt: Date
  updatedBy: null
}

export interface DepartmentPivot {
  departmentId: number
  userId: number
}

export interface MediaFiles {
  profile: Profile
}

export interface Profile {
  id: null
  filename: null
  mimeType: null
  fileSize: null
  path: string
  relativePath: string
  isImage: boolean
  isVideo: boolean
  isFolder: boolean
  mediaType: string
  folderId: null
  description: null
  alt: null
  keywords: null
  createdBy: null
  createdAt: null
  updatedAt: null
  faIcon: string
  disk: null
  extension: null
  url: string
  createdByUser: null
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

export interface Role {
  createdAt: Date
  createdBy: null
  deletedAt: null
  deletedBy: null
  formId: null
  id: number
  name: string
  organizationId: null
  permissions: Permissions
  pivot: RolePivot
  slug: string
  title: string
  updatedAt: Date
  updatedBy: null
}

export interface RolePivot {
  createdAt: Date
  roleId: number
  updatedAt: Date
  userId: number
}


export interface UserSkill {
  createdAt:      Date;
  createdBy:      number;
  deletedAt:      null;
  deletedBy:      null;
  entityId:       string;
  entityType:     string;
  id:             number;
  organizationId: null;
  title:          string;
  updatedAt:      Date;
  updatedBy:      number;
  userId:         number;
}