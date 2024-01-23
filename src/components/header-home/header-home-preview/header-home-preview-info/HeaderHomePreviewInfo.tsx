import ButtonLink from 'components/ui/button-link/ButtonLink';
import { FC } from 'react';

const HeaderHomePreviewInfo: FC = () => {
  return (
    <div className="mt-12 text-title max-w-[515px]">
      <h1 className="text-title text-7xl font-black font-['Roboto'] uppercase leading-[70px] mb-4">
        Personal and Business
      </h1>
      <p className="text-2xl font-['Montserrat'] uppercase leading-9 tracking-[20px] mb-8">
        Online storage
      </p>
      <hr className="w-full mb-11" />
      <h2 className="text-[26px] font-medium font-['Roboto'] uppercase leading-10 mb-3">
        STORE AND MANAGE ALL YOUR Files!
      </h2>
      <p className="text-lg font-normal font-['Montserrat'] leading-7 tracking-wider mb-6">
        Upload multiple files at once and keep them forever on this site. If
        you're using FireFox or Chrome, you can simply drag & drop your files to
        begin uploading
      </p>
      <ButtonLink text="Try SkyBox Now" />
    </div>
  );
};

export default HeaderHomePreviewInfo;
