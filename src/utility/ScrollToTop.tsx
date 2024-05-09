import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface ScrollToTopProp {
  className?: string;
  children: React.ReactNode;
}

export default function ScrollToTop(props: ScrollToTopProp) {
  const { pathname } = useLocation();

  useEffect(() => {
    const body = document.querySelector('#root');
    body!.scrollIntoView({
        behavior: 'smooth'
    })
  }, [pathname]);

  return <div>{props.children}</div>;
}
