export function Arrows(props) {
  const viewItem = props.viewItem;
  const setViewItem = props.setViewItem;

  const lastItem = function () {
    console.log("lastItem is firing");
    setViewItem(viewItem - 1);
    console.log(viewItem);
  };

  const nextItem = function () {
    console.log("nextItem is firing");

    setViewItem(viewItem + 1);
  };
  return (
    <div className="flex place-content-between w-full">
      <img src="/Arrow.svg" onClick={lastItem} />
      <img src="/Arrow.svg" onClick={nextItem} />
    </div>
  );
}
