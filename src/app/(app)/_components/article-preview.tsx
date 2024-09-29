import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Article } from "@/types/interfaces";

export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <Card className="group">
        <CardHeader>
          <CardTitle className="line-clamp-1">{article.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {article.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="aspect-[4/1] w-full animate-pulse rounded-lg border border-orange-500/10 bg-gradient-to-tr from-orange-500/20 to-orange-500/25"></div>
            <div className="absolute right-3 top-3 grid h-8 w-8 shrink-0 rotate-0 place-items-center rounded-full border border-gray-500/20 bg-gray-500/15 transition-transform group-hover:-rotate-45">
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <div>Lorem ipsum dolor sit amet.</div>
          <div>Lorem ipsum dolor sit amet.</div>
        </CardFooter>
      </Card>
    </Link>
  );
}
