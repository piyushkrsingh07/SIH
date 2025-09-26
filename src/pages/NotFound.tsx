import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      t("404 Error: User attempted to access non-existent route:") + ` ${location.pathname}`
    );
  }, [location.pathname, t]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">{t("Oops! Page not found")}</p>
        <a
          href="/"
          className="text-blue-500 underline hover:text-blue-700"
        >
          {t("Return to Home")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
