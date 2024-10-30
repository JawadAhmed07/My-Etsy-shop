"use client"

// import Image from 'next/image';
// import google from '../../Images/google.png';
import React, { useEffect, useState } from 'react';
// import reviewsImage from '../../Images/gd/review.png'; // Assuming correct image path
import Image from 'next/image';

// Define fake reviews data
const reviewsData = [
  {
    id: 1,
    name: 'John Doe',
    date: 'June 15, 2024',
    text: 'Amazing experience working with the team! Their dedication and skills helped grow my business.',
    stars: 5,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU',
  },
  {
    id: 2,
    name: 'Jane ',
    date: 'July 22, 2024',
    text: 'They were so helpful in optimizing my website for SEO. Highly recommend them!',
    stars: 5,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    date: 'May 12, 2024',
    text: 'Incredible service with a great team! They understood exactly what I needed.',
    stars: 5,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU',
  },
  {
    id: 4,
    name: 'Michael Brown',
    date: 'August 1, 2024',
    text: 'Exceptional work! They increased my website traffic within a month!',
    stars: 5,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU',
  },
  {
    id: 5,
    name: 'Emily Davis',
    date: 'September 5, 2024',
    text: 'Very professional service. They were responsive and exceeded my expectations.',
    stars: 4,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU',
  },
  {
    id: 6,
    name: 'Chris Evans',
    date: 'March 18, 2024',
    text: 'Excellent SEO service, truly made a difference in my online presence.',
    stars: 5,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU',
  },
  {
    id: 7,
    name: 'Natalie Portman',
    date: 'October 2, 2024',
    text: 'Highly recommend their team for website optimization and SEO.',
    stars: 5,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU',
  },
  {
    id: 8,
    name: 'Robert Downey',
    date: 'November 11, 2024',
    text: 'Very impressed with the SEO strategy they implemented!',
    stars: 5,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU',
  },
];

// ReviewCard component to render individual review
const ReviewCard = ({ review }) => {
  const { name, date, text, stars, logo } = review;

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-96 my-4 mx-2 border">
      <div className='flex gap-4'>
        <div className='my-2'>
          {/* Use Image for external logos */}
          <img width={500} height={300} src={logo} alt="Google logo" className="w-8 h-8 rounded-full" />
        </div>
        <div>
          <div className="flex items-center">
            <h4 className="font-semibold text-md">{name}</h4>
          </div>
          <p className="text-sm text-gray-500 mb-3">{date}</p>
        </div>
        <div className="pl-16">
          {/* <img src={""} alt="Google" width={40} height={40} /> */}
        </div>
      </div>

      <div className="flex items-center mb-4">
        {[...Array(stars)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.507 4.639a1 1 0 00.95.69h4.875c.969 0 1.371 1.24.588 1.81l-3.95 2.87a1 1 0 00-.364 1.118l1.508 4.639c.3.92-.755 1.688-1.538 1.118l-3.951-2.87a1 1 0 00-1.175 0l-3.951 2.87c-.783.57-1.838-.197-1.538-1.118l1.507-4.639a1 1 0 00-.364-1.118l-3.95-2.87c-.784-.57-.38-1.81.588-1.81h4.875a1 1 0 00.95-.69l1.507-4.64z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
};

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to cycle through reviews every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % reviewsData.length);
    }, 10000); // 10-second interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Slice out 4 reviews at a time based on currentIndex
  const visibleReviews = reviewsData.slice(currentIndex, currentIndex + 4);

  return (
    <>
      <section>
        <div className="text-center py-10">
          <h1 className="text-3xl dark:text-white text-gray-500">What some of our satisfied customers are saying</h1>
          <h1 className="text-4xl dark:text-white font-bold py-5 text-gray-700"> Client Testimonials</h1>
        </div>
        <div className="flex gap-2 justify-center">


          <div className='w-72 my-16 px-10 items-center text-center'>
            <h1 className='text-2xl font-bold'>Excellent</h1>
            <h1>Star Image</h1>
            <h1 className='text-sm'>Based on <span className='font-bold'>47 reviews</span>
            </h1>
            <h1>Google image </h1>
            {/* <img className="w-52 my-16 " src={""} alt="Review illustration" width={200} height={200} /> */}
          </div>
          <div className="flex overflow-x-auto">
            {/* Render 4 reviews */}
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;



