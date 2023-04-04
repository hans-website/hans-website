import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Kontakt"
        description="Schreiben Sie mir gerne persönlich, wenn Sie Fragen haben, an Unterricht interessiert sind oder mich für Konzerte anfragen möchten!"
      />
    }
  >
    <div className="sub-title">
      <h1>Kontakt</h1>
    </div>
    <Content>
      <div className="pageAbout">
        <img
          className="aboutImage"
          src="/assets/images/vita.webp"
          alt="Bild von Hans Porten"
        />
        <h2 className="aboutName">Hans Porten</h2>
        <h3 className="aboutJob">Bariton</h3>
        <p>
          Schreiben Sie mir gerne persönlich, wenn Sie Fragen haben, an
          Unterricht interessiert sind oder mich für Konzerte anfragen möchten!
        </p>
        <div className="contact">
          <img
            className="img"
            alt="Image of an email"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGVsbGlwc2Ugc3R5bGU9InBhaW50LW9yZGVyOiBzdHJva2U7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBzdHJva2Utb3BhY2l0eTogMDsgc3Ryb2tlLXdpZHRoOiAwcHg7IGZpbGw6IHJnYigxNjgsIDEzNCwgODcpOyIgY3g9IjI0NS42OTMiIGN5PSIyNDcuOTM2IiByeD0iMjI2LjIxMiIgcnk9IjIyNi4yMTIiLz4KICA8cGF0aCBkPSJNIDE0MC41MzEgMzUyLjgyOSBDIDEzMi4yOSAzNTIuODI5IDEyNS4yNyAzNDkuOTMgMTE5LjQ3MyAzNDQuMTMyIEMgMTEzLjY3NCAzMzguMzM0IDExMC43NzUgMzMxLjMxNCAxMTAuNzc1IDMyMy4wNzMgTCAxMTAuNzc1IDE2NC4xNjIgQyAxMTAuNzc1IDE1NS44MzQgMTEzLjY3NCAxNDguNzM5IDExOS40NzMgMTQyLjg4IEMgMTI1LjI3IDEzNy4wMiAxMzIuMjkgMTM0LjA4OSAxNDAuNTMxIDEzNC4wODkgTCAzNTAuMDkxIDEzNC4wODkgQyAzNTguNDIgMTM0LjA4OSAzNjUuNTE0IDEzNy4wMiAzNzEuMzc0IDE0Mi44OCBDIDM3Ny4yMzQgMTQ4LjczOSAzODAuMTY0IDE1NS44MzQgMzgwLjE2NCAxNjQuMTYyIEwgMzgwLjE2NCAzMjMuMDczIEMgMzgwLjE2NCAzMzEuMzE0IDM3Ny4yMzQgMzM4LjMzNCAzNzEuMzc0IDM0NC4xMzIgQyAzNjUuNTE0IDM0OS45MyAzNTguNDIgMzUyLjgyOSAzNTAuMDkxIDM1Mi44MjkgTCAxNDAuNTMxIDM1Mi44MjkgWiBNIDM1MC4wOTEgMTg4Ljg1MyBMIDI1My41NzMgMjUzLjczNyBDIDI1Mi4xMTQgMjU0LjU4OCAyNTAuNzQyIDI1NS4yMjQgMjQ5LjQ1NiAyNTUuNjQ2IEMgMjQ4LjE3IDI1Ni4wNjggMjQ2Ljc4OSAyNTYuMjc5IDI0NS4zMTIgMjU2LjI3OSBDIDI0My44MzQgMjU2LjI3OSAyNDIuNDUzIDI1Ni4wNjggMjQxLjE2NyAyNTUuNjQ2IEMgMjM5Ljg4MSAyNTUuMjI0IDIzOC41MDggMjU0LjU4OCAyMzcuMDQ5IDI1My43MzcgTCAxNDAuNTMxIDE4OC44NTMgTCAxNDAuNTMxIDMyMy4wNzMgTCAzNTAuMDkxIDMyMy4wNzMgTCAzNTAuMDkxIDE4OC44NTMgWiBNIDI0NS4zMTIgMjMzLjE3MSBMIDM0OC44MjUgMTY0LjE2MiBMIDE0Mi4xMTQgMTY0LjE2MiBMIDI0NS4zMTIgMjMzLjE3MSBaIE0gMTQwLjUzMSAxODguODUzIEwgMTQwLjUzMSAxOTIuMDE5IEwgMTQwLjUzMSAxNzQuNjY1IEwgMTQwLjUzMSAxNzUuMDAyIEwgMTQwLjUzMSAxNjQuMTYyIEwgMTQwLjUzMSAxNzQuOTI1IEwgMTQwLjUzMSAxNzQuMzE5IEwgMTQwLjUzMSAxOTIuMDE5IEwgMTQwLjUzMSAxODguODUzIEwgMTQwLjUzMSAzMjMuMDczIEwgMTQwLjUzMSAxODguODUzIFoiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7Ii8+Cjwvc3ZnPg=="
          />

          <div>hansporten.gesang@gmail.com</div>
        </div>
        <div className="contact">
          <img
            className="img"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGVsbGlwc2Ugc3R5bGU9InBhaW50LW9yZGVyOiBzdHJva2U7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBzdHJva2Utb3BhY2l0eTogMDsgc3Ryb2tlLXdpZHRoOiAwcHg7IGZpbGw6IHJnYigxNjgsIDEzNCwgODcpOyIgY3g9IjI0NS42OTMiIGN5PSIyNDcuOTM2IiByeD0iMjI2LjIxMiIgcnk9IjIyNi4yMTIiLz4KICA8cGF0aCBkPSJNIDM1MS42MzcgMzY4LjI1MyBDIDMyNC4xMDggMzY4LjI1MyAyOTYuODEgMzYxLjUyNyAyNjkuNzQzIDM0OC4wNzYgQyAyNDIuNjc2IDMzNC42MjUgMjE4LjI5IDMxNy4xMjIgMTk2LjU4NiAyOTUuNTY1IEMgMTc0Ljg4MiAyNzQuMDEgMTU3LjMxIDI0OS42MyAxNDMuODcxIDIyMi40MjYgQyAxMzAuNDMyIDE5NS4yMjIgMTIzLjcxMiAxNjcuOTY1IDEyMy43MTIgMTQwLjY1MyBDIDEyMy43MTIgMTM0LjM2NyAxMjUuODggMTI5LjA1NiAxMzAuMjE1IDEyNC43MjEgQyAxMzQuNTUgMTIwLjM4NSAxMzkuODYxIDExOC4yMTggMTQ2LjE0NyAxMTguMjE4IEwgMTkxLjY2NyAxMTguMjE4IEMgMTk4LjMwMyAxMTguMjE4IDIwMy43NTQgMTE5Ljk1MiAyMDguMDI0IDEyMy40MiBDIDIxMi4yOTMgMTI2Ljg4OCAyMTUuMTg1IDEzMS45ODMgMjE2LjcwMyAxMzguNzAyIEwgMjI1LjQ4MiAxNzQuNDY4IEMgMjI2LjU2NiAxODAuMzIgMjI2LjQ4IDE4NS4zNzQgMjI1LjIyNiAxODkuNjI4IEMgMjIzLjk3MiAxOTMuODgyIDIyMS41NjUgMTk3LjQ5OCAyMTguMDA0IDIwMC40NzkgTCAxODQuMTg5IDIzMS4zNjcgQyAxOTUuMDI3IDI0OC40OTIgMjA2LjczOSAyNjMuMjg5IDIxOS4zMjUgMjc1Ljc1OSBDIDIzMS45MTIgMjg4LjIyOSAyNDUuOTk1IDI5OC43OTMgMjYxLjU3MyAzMDcuNDUxIEwgMjk0LjA4NyAyNzQuNjEyIEMgMjk3Ljk4OCAyNzAuNzEgMzAyLjE2MiAyNjguMDU0IDMwNi42MDUgMjY2LjY0NiBDIDMxMS4wNDkgMjY1LjIzNyAzMTUuOTggMjY1LjE4MiAzMjEuMzk5IDI2Ni40ODMgTCAzNTMuMjYzIDI3NC4yODcgQyAzNjAuMDUgMjc2LjEwMiAzNjUuMjE1IDI3OS4xNTcgMzY4Ljc1OCAyODMuNDUyIEMgMzcyLjMwMSAyODcuNzQ2IDM3NC4wNzIgMjkzLjI1MyAzNzQuMDcyIDI5OS45NzIgTCAzNzQuMDcyIDM0NS40OTMgQyAzNzQuMDcyIDM1MS45OTUgMzcxLjkwNCAzNTcuNDE0IDM2Ny41NjkgMzYxLjc1IEMgMzYzLjIzNCAzNjYuMDg1IDM1Ny45MjMgMzY4LjI1MyAzNTEuNjM3IDM2OC4yNTMgWiBNIDE2OC45MDcgMjA0LjM4MSBMIDE5NC45MTggMTc5Ljk5NSBMIDE4Ny43NjUgMTQ4Ljc4MSBMIDE1NC45MjYgMTQ4Ljc4MSBDIDE1NC40OTMgMTU2LjE1OCAxNTUuNDA5IDE2NC4zMzcgMTU3LjY3NiAxNzMuMzE2IEMgMTU5Ljk0MiAxODIuMjk1IDE2My42ODYgMTkyLjY1IDE2OC45MDcgMjA0LjM4MSBaIE0gMjg5LjUzNSAzMjMuMDU4IEMgMjk3LjMzOSAzMjYuOTU5IDMwNS45NTQgMzMwLjEwMyAzMTUuMzg0IDMzMi40ODcgQyAzMjQuODEzIDMzNC44NzEgMzM0LjA3OSAzMzYuMzg5IDM0My4xODMgMzM3LjAzOSBMIDM0My4xODMgMzAzLjU0OSBMIDMxNC41NzEgMjk3LjA0NiBMIDI4OS41MzUgMzIzLjA1OCBaIE0gMTY4LjkwNyAyMDQuMzgxIFogTSAyODkuNTM1IDMyMy4wNTggWiIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiLz4KPC9zdmc+"
            alt="Image of a phone"
          />
          <div>015164619344</div>
        </div>
      </div>
    </Content>
  </Main>
);

export default About;
