import Image from 'next/image';
import '../../styles/upcoming.css';
import RemainingTime from './RemainingTime';

interface Props {
  title: string;

  description: string;
  actionButtonTitle1: string;
  actionButtonRedirect1: string;
  actionButtonTitle2: string;
  actionButtonRedirect2: string;
  image: string;
  timestamp: number;
}

const Upcoming = ({
  title,
  description,
  actionButtonTitle1,
  actionButtonRedirect1,
  actionButtonTitle2,
  actionButtonRedirect2,
  image,
  timestamp,
}: Props) => {
  // Split the sentence into words
  const words = title.split(' ');

  // Get the first two words
  const firstTwoWords = words.slice(0, 2).join(' ');
  const restOfSentence = words.slice(2).join(' ');

  return (
    <div id="upcoming_event_container relative bg-white">
      <div className="blog-section shadow-[09px_13px_40px_10px_#00000024]">
        <div className="absolute -z-10 right-0 w-full h-full">
          <Image
            src={'/dummy.jpg'}
            alt={'Image'}
            className="object-right object-cover gradient-mask-b-10 md:gradient-mask-l-40"
            fill
          />
        </div>
        <div className="left-part m-5 md:ml-10 md:mr-0">
          <div id="blg_hdr">
            <h1 className="blog-title-1">{firstTwoWords}</h1>
            <h1 className="blog-title-2 text-black break-words">{restOfSentence}</h1>
          </div>
          <p className="blog-content line-clamp-5">{description}</p>
          <div className="buttons flex flex-col sm:flex-row gap-2 sm:gap-5 mt-2 sm:mt-4">
            <a
              href={actionButtonRedirect1}
              className="register-button flex items-center justify-center"
            >
              <div>{actionButtonTitle1}</div>
            </a>
            <a
              href={actionButtonRedirect2}
              className="learn-more-button flex items-center justify-center"
            >
              <div>{actionButtonTitle2}</div>
            </a>
          </div>
        </div>
        <RemainingTime time={timestamp} />
      </div>
    </div>
  );
};

export default Upcoming;
