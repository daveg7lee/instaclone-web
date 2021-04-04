import { Helmet } from 'react-helmet-async';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => (
  <Helmet>
    <title>{title} | Instaclone</title>
  </Helmet>
);

export default PageTitle;
