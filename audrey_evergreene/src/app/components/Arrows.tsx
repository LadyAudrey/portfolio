type ArrowsProps = {
  viewItem: number;
  setViewItem: (_: number) => void;
};

export function Arrows(props: ArrowsProps) {
  const viewItem = props.viewItem;
  const setViewItem = props.setViewItem;

  const lastItem = function () {
    setViewItem(viewItem - 1);
  };

  const nextItem = function () {
    setViewItem(viewItem + 1);
  };
  return (
    <div className="flex place-content-between w-full">
      <img src="/Arrow.svg" onClick={lastItem} />
      <img src="/Arrow.svg" onClick={nextItem} />
    </div>
  );
}
