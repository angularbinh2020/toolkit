export const handlePressEnter = ({
  event,
  onEnter,
}: {
  event: any;
  onEnter?: any;
}) => {
  const isEnter = event.key === "Enter" || event.keyCode === 13;
  if (isEnter) {
    onEnter?.(event);
  }
};
