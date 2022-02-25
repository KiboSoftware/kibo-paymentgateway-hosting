export const getPackageInfo = () => {
  return {
    version: process.env.npm_package_version,
    name: process.env.npm_package_name,
    commit: process.env.GIT_COMMIT || 'N/A',
  }
}
