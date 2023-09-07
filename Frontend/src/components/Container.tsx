import React, { ReactNode } from "react"

type ContainerProps = {
  classI: string
  children: ReactNode // Define children as ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <section className={props.classI}>
      <div className="container-xxl">{props.children}</div>
    </section>
  )
}

export default Container
