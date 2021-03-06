import m from "mithril";

export enum Authorizations {
  PUBLIC = "public",
  REGISTERED = "registerd",
  ADMIN = "admin",
}

interface ProtectedRouteProps {
  path: string;
  autz: Array<Authorizations>;
}

const protectedRoutes: ProtectedRouteProps[] = [
  {
    path: "/home",
    autz: [
      Authorizations.ADMIN,
      Authorizations.REGISTERED,
      Authorizations.PUBLIC,
    ],
  },
];

export function redirect(requestedPath?: string): void {
  try {
    const path = m.route.get();

    if (requestedPath) {
      m.route.set(requestedPath);
    } else {
      //in case the user try to enter a page
      const path = m.route.get();
    
      m.route.set(path);
    }
  } catch (error) {
    console.error(error);
  }
}
