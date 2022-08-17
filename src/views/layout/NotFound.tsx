const NotFound = () => {
  return <>Not Found</>
}

export default NotFound;

export const NotFoundPage = {
  icon: NotFound,
  path: '*',
  name: 'nofound',
  element: NotFound
}