import Navbar from "@/components/navbar";
import ArticlePreview from "@/app/(app)/_components/article-preview";
import SearchBox from "@/app/(app)/_components/search-box";
import PopularTags from "@/app/(app)/_components/popular-tags";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-12 pt-12">
        <div className="col-span-8 flex flex-col gap-6">
          <ArticlePreview
            article={{
              id: "123",
              title:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
              excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
            }}
          />
          <ArticlePreview
            article={{
              id: "123",
              title:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
              excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
            }}
          />
          <ArticlePreview
            article={{
              id: "123",
              title:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
              excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
            }}
          />
          <ArticlePreview
            article={{
              id: "123",
              title:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
              excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem explicabo fugiat fugit inventore non numquam, quisquam quod repudiandae saepe.",
            }}
          />
          {/*<article className="flex h-48 gap-4 rounded-xl border border-gray-500/10 bg-gray-500/5 p-4">*/}
          {/*  <div className="p-1">*/}
          {/*    <h1 className="mb-3 line-clamp-2 text-xl font-medium text-black/85">*/}
          {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
          {/*      Asperiores cupiditate eum facere inventore itaque laudantium*/}
          {/*      maxime quidem rem soluta voluptate.*/}
          {/*    </h1>*/}
          {/*    <p className="line-clamp-3 text-black/75">*/}
          {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,*/}
          {/*      laborum, quaerat? Aliquam beatae blanditiis consequatur cum*/}
          {/*      debitis dolor dolore doloremque dolores doloribus, eligendi esse*/}
          {/*      ex exercitationem fuga fugit ipsam labore libero magnam natus,*/}
          {/*      nobis nostrum officia omnis perspiciatis quia quidem quis quos*/}
          {/*      ratione, repudiandae rerum temporibus veniam vitae voluptas*/}
          {/*      voluptatibus?*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  /!*<div className="aspect-[4/3] h-full animate-pulse rounded-lg border border-gray-500/10 bg-gradient-to-tr from-gray-500/20 to-gray-500/25"></div>*!/*/}
          {/*</article>*/}

          {/*<article className="flex h-48 gap-4 rounded-xl border border-gray-500/10 bg-gray-500/5 p-4">*/}
          {/*  <div className="w-full p-1">*/}
          {/*    <div className="mb-3 h-14 animate-pulse rounded-lg bg-gradient-to-tr from-gray-500/20 to-gray-500/25"></div>*/}
          {/*    <div className="mb-3 h-20 animate-pulse rounded-lg bg-gradient-to-tr from-gray-500/20 to-gray-500/25"></div>*/}
          {/*    /!*<p className="line-clamp-3">*!/*/}
          {/*    /!*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,*!/*/}
          {/*    /!*  laborum, quaerat? Aliquam beatae blanditiis consequatur cum*!/*/}
          {/*    /!*  debitis dolor dolore doloremque dolores doloribus, eligendi esse*!/*/}
          {/*    /!*  ex exercitationem fuga fugit ipsam labore libero magnam natus,*!/*/}
          {/*    /!*  nobis nostrum officia omnis perspiciatis quia quidem quis quos*!/*/}
          {/*    /!*  ratione, repudiandae rerum temporibus veniam vitae voluptas*!/*/}
          {/*    /!*  voluptatibus?*!/*/}
          {/*    /!*</p>*!/*/}
          {/*  </div>*/}
          {/*  <div className="aspect-[4/3] h-full animate-pulse rounded-lg border border-gray-500/10 bg-gradient-to-tr from-gray-500/20 to-gray-500/25"></div>*/}
          {/*</article>*/}
        </div>

        <aside className="col-span-4 h-full space-y-4">
          <SearchBox />
          <PopularTags />
        </aside>
      </div>
    </>
  );
}
