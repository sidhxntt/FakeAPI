"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Schema",
      description:
        "In our database schema, the address information is fully integrated with the user table, which acts as the central entity. This integration means that address data cannot be managed separately. Instead, any operations related to addresses—such as creating, updating, or deleting addresses—must be performed through user records. To modify an address, you would update the corresponding user's record rather than the address directly. This design ensures that address data remains consistent and linked to its associated user, reflecting changes in real time across the system. Furthermore, the schema is normalized, which means that the structure is designed to reduce redundancy and ensure data integrity. The user table handles all address-related operations, making the management of address data efficient and ensuring that updates are consistent with the user’s information.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "API Routes",
      description:
        "You can enable pagination for the GET /many endpoint using the page and limit query parameters. By default, the limit is set to 10 items per page. For instance, to retrieve the second page with 20 items per page, use GET /users/posts?page=2&limit=20. If you omit the page parameter, it will default to the first page. The limit parameter can be specified on its own, and the page will be automatically calculated based on the default or provided values.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        Optimized Query Performance
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        Achieve lightning-fast response times with finely-tuned queries, enhanced by Prisma's accelerated performance features. By leveraging Prisma's efficient query optimization, your application can handle complex data operations seamlessly, ensuring that even the most demanding requests are processed quickly and efficiently.{" "}
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-full mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto  dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="/schema.png"
            alt="header"
            width={800}
            height={300}
            className="aspect-square object-cover  rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <ol className="list-disc px-4">
      <li className="mt-4">
        <Link className="font-bold" href="/users">
          GET /users
        </Link>
        <p> (Get all 10 users)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users">
          POST /users
        </Link>
        <p> (Add User and its address to user group)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/1">
          GET /users/:userID
        </Link>
        <p>(Get single user by its ID)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/addresses">
          GET /users/addresses
        </Link>
        <p>(Get all addresses of users)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/addresses/1">
          GET /users/addresses/:addressID
        </Link>
        <p>(Get single addresses of a single user)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/1">
          DELETE /users/:userID{" "}
        </Link>
        <p>(Delete single user and its address by its ID)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/1">
          PATCH /users/:userID{" "}
        </Link>
        <p>(Update single user and its address by its ID)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/todos">
          GET /todos/{" "}
        </Link>
        <p>(get all 310 todos)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/todos/1">
          GET /todos/:todoID{" "}
        </Link>
        <p>(get single todo by its ID)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/posts">
          GET /posts/{" "}
        </Link>
        <p>(get all 100 posts)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/posts/1">
          GET /posts/:postID{" "}
        </Link>
        <p>(get single post by its ID)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/albums">
          GET /albums/{" "}
        </Link>
        <p>(get all 200 albums)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/albums/1">
          GET /albums/:albumID{" "}
        </Link>
        <p>(get single album by its ID)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/albums/images">
          GET /albums/images{" "}
        </Link>
        <p>(get all 10,000 images)</p>
      </li>
      <li className="mt-4">
        <Link className="font-bold" href="/users/albums/images/1">
          GET /albums/images/:imageID{" "}
        </Link>
        <p>(get single image by its ID)</p>
      </li>
    </ol>
  );
};
