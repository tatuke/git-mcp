import { useMCP } from "~/chat/lib/context/mcp-context";
export const ProjectOverview = () => {
  const { owner, repo } = useMCP();
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        {repo ? `Chat with ${repo} docs` : "Chat with GitHub docs"}
      </h1>
      <p className="text-foreground/80 text-lg mb-4 text-center">
        Ask questions about {repo ? `${owner}/${repo}` : "any GitHub repo"}{" "}
        documentation.
      </p>
    </div>
  );
};
