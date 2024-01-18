import Container from 'components/container/Container';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import { FC } from 'react';
import PreviewImage from './preview-image/PreviewImage';

const PreviewInfo: FC = () => {
  return (
    <Container width={1350}>
      <section className="flex">
        <div className="mt-12 text-title max-w-[515px]">
          <Title
            text="Personal
	and Business"
          />
          <ContentText />
          <hr className="w-full mb-11" />
          <h2 className="text-[26px] font-medium font-['Roboto'] uppercase leading-10 mb-3">
            STORE AND MANAGE ALL YOUR Files!
          </h2>
          <p className="text-lg font-normal font-['Montserrat'] leading-7 tracking-wider">
            Upload multiple files at once and keep them forever on this site. If
            you're using FireFox or Chrome, you can simply drag & drop your
            files to begin uploading
          </p>
        </div>
        <PreviewImage />
      </section>
    </Container>
  );
};

export default PreviewInfo;
