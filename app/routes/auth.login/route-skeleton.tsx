import Layout from "~/components/layout";
import { Loading } from "~/components/quote";
import { Skeleton } from "~/components/ui/skeleton";

const RouteSkeleton: React.FC = () => {
  return (
    <Layout.Screen.Body className="flex flex-col justify-center md:pb-[15vh]">
      <div className="mb-[10vh] md:mb-[5vh] flex flex-row border rounded">
        <div className="flex-1 flex flex-col justify-center px-6 py-12">
          <Skeleton className="h-8 w-24 mb-6" />
          <Skeleton className="h-8 mb-6" />
          <Skeleton className="h-8 mb-6" />
          <Skeleton className="h-8 w-16" />
        </div>
        <div className="hidden md:block flex-1 lg:flex flex-col justify-center bg-muted text-muted-foreground p-6 rounded-tr rounded-br">
          <Loading />
        </div>
      </div>
    </Layout.Screen.Body>
  );
};

export default RouteSkeleton;
