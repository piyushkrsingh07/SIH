import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [lngs, setLngs] = useState({});

  const changeLanguages = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (i18next.services?.backendConnector?.backend?.getLanguages) {
      console.log("Languages (i18next.languages):", i18next.languages);
console.log("Resource Store:", i18next.services.resourceStore.data);
console.log("getLanguages():", i18next.services.backendConnector.backend.getLanguages?.());

      i18next.services.backendConnector.backend.getLanguages((err, languages) => {
        if (!err && languages) {
          setLngs(languages);
        }
      });
    }
  }, [i18n]);

  

  return (
    // <div className="p-4 bg-gray-100 inline-block rounded shadow-md">
    //   {Object.keys(lngs).map((lng) => (
    //     <select
    //       key={lng}
    //               value={i18n.language}
    //     onChange={(e) => changeLanguages(e.target.value)}
    //       className={lng === i18n.language ? 'px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' : ''}
    //       // onClick={() => changeLanguages(lng)}
    //     >
    //       <option>{lngs[lng].nativeName}</option>
    //     </select>
    //   ))}
    // </div>
     <div className="inline-block bg-gray-100 p-3 rounded-md shadow-md">

      <select
        id="language-select"
        value={i18n.language}
        onChange={(e) => changeLanguages(e.target.value)}
        className="w-[120%] px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {Object.keys(lngs).map((lng) => (
          <option key={lng} value={lng}>
            {lngs[lng].nativeName || lng}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

