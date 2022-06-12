




import { useState } from 'react';
//import ReactLanguageSelect from "react-languages-select";

//import css module
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default function SelectLanguage() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  //const [selectedLanguage, setSelectedLanguage] = useState("");
  const selectedLanguage = "";
  //setSelectedLanguage=selectedLanguage;
  return (
    <div className='chonquocgia'>
      {/* <ReactLanguageSelect
        names={"international"}
        onSelect={(languageCode) => setSelectedLanguage(languageCode)}
      /> */}

      <div className='quocgia'>
        <p>Quốc gia</p><p className='batbuoc'>*</p>
        {selectedLanguage}
        <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)}
        />
      </div>
      <div className='thanhpho'>
        <p>Thành phố</p><p className='batbuoc'>*</p>

        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </div>
      {/* <div>{country}</div>
      <div>{region}</div> */}
    </div>

  );
}
