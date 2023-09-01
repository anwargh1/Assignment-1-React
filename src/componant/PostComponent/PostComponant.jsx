import React from 'react';
import './postComponant.css';

function PostComponant() {
  const data = [
    {
      title: 'Lion',
      img: '/image/Image2.jpg',
      summary: 'Show moer details',
      details: `The lion is a large carnivorous mammal known for its distinctive
            mane. It is often referred to as the "king of the jungle." Lions are
            social animals that live in groups called prides. They are known for
            their strength, agility, and hunting skills.`,
    },
    {
      title: 'Tiger',
      img: '/image/Image1.jpg',
      summary: 'Show moer details',
      details: `Tigers are powerful and solitary big cats known for their distinctive orange coat with black stripes. They are excellent hunters
            and can leap great distances to catch their prey. Tigers are currently an endangered species due to habitat loss and poaching.`,
    },
    {
      title: 'Elephant',
      img: '/image/Image3.jpg',
      summary: 'Show moer details',
      details: `Elephants are the largest land animals on Earth. They are known for their long trunks, which are actually elongated noses and upper lips.
            Elephants are highly intelligent and social creatures. They are herbivores and consume a large amount of vegetation daily.`,
    },
    {
      title: 'Dolphin',
      img: '/image/Image4.jpg',
      summary: 'Show moer details',
      details: `Dolphins are highly intelligent marine mammals known for their playful behavior and communication skills. They are known for their
            streamlined bodies and strong tails, which enable them to swim at high speeds.`,
    },
    {
      title: 'Elephant',
      img: '/image/Image5.jpg',
      summary: 'Show moer details',
      details: `Giraffes are the tallest land animals, with long necks and spotted coats. They are herbivores and primarily feed on leaves from tall trees.
            Giraffes are known for their unique appearance and are often found in the savannas of Africa.`,
    },
    {
      title: 'Kangaroo',
      img: '/image/Image6.jpg',
      summary: 'Show moer details',
      details: `Kangaroos are marsupial mammals native to Australia. They are known for their powerful hind legs, which they use for hopping and jumping.
            Kangaroos are herbivores and are well-adapted to the arid Australian outback.`,
    },
  ];
  return (
    <main>
      {data.map(item => (
        <section className="animal">
          <h2 className="animal-name">{item.title}</h2>
          <img src={item.img} alt={item.title} className="animal-img" />
          <details className="animal-description">
            <summary>{item.summary}</summary>
            <p className="animal-p">{item.details}</p>
          </details>
        </section>
      ))}
    </main>
  );
}

export default PostComponant;
