type RoleBaseGuard = {
  children: React.ReactNode,
  permissions: string[]
}

export const RoleBasedGuard = (props: RoleBaseGuard ) => {
  const { children, permissions } = props;
  
  // Here check the user permissions
  const canView = true;
  
  if (!canView) {
    return null;
  }

  return <>{children}</>;
};
