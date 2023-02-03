import styled from 'styled-components';

const StyledVideo = styled.div`
  width: 100%;
  min-height: 200px;
  height: calc(100vh - 4px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  .overlay {
    background-color: var(--color1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.75;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BGVideo = (props: any) => {
  return (
    <StyledVideo>
      <div className='overlay'></div>
      <video src={props.source} loop muted autoPlay></video>
    </StyledVideo>
  );
};

export default BGVideo;
