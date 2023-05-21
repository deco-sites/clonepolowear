export interface Props {
  informative: Array<{
    url: string;
    alt: string;
    content: string;
  }>,
  sizeIcon?: number
}

function ContainerInformative({informative, sizeIcon=30}: Props) {
  return(
    <div className="flex justify-evenly bg-slate-300 h-28">
      {
        informative.map(({url, content, alt}) => (
          <div
            style="display:flex;flex-direction:column;justify-content: center;"
            className="w-[125px] text-center"
          >
            <img className="m-auto my-0" width={`${sizeIcon}px`} src={url} alt={alt}/>
            <p className="text-xs font-bold">{content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ContainerInformative;