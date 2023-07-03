const Commit = ({ params }: { params: { commitId: string } }) => (
  <div>This commit {params.commitId}</div>
);

export default Commit;
