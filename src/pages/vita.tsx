import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Vita = () => (
  <Main
    meta={
      <Meta
        title="Vita"
        description="Hans Porten wusste schon im zarten Alter von fünf Jahren, dass
  Singen seine große Leidenschaft ist. Bereits in diesem Alter..."
      />
    }
  >
    <div className="sub-title">
      <h1>Vita</h1>
    </div>
    <Content>
      <div className="vita">
        <p>
          <b>Hans Porten</b> wusste schon im zarten Alter von fünf Jahren, dass
          Singen seine große Leidenschaft ist. Bereits in diesem Alter durfte er
          im Kinderchor der Musikschule Herrenberg solistisch auftreten, etwa
          mit dem „Pie Jesu“ des Requiems von Andrew Lloyd Webber. Von 2007 bis
          2018 war Hans Porten Mitglied der Aurelius Sängerknaben Calw. Dort
          erhielt er Stimmbildungsunterricht bei Claudia Fries Levacher und
          übernahm neben chorischen Aufgaben im Kammerchor unter der Leitung von
          Bernhard Kugler auch solistische Partien sowie dirigentische Aufgaben.
          Hans genoss das Singen im Chor mit berühmten Orchestern wie z.B. den
          Berliner Philharmonikern und unter Dirigenten, wie Daniel Barenboim,
          Ari Rasilainen, Judith Kubitz oder Jonathan Nott. Auf CDs der Aurelius
          Sängerknaben ist er ebenfalls im Chor und als Solist zu hören.
        </p>
        <p>
          In der Spielzeit 2011/12 zählte Hans Porten zu den drei Solisten, die
          an der Berliner Staatsoper im Schiller Theater die Partie der drei
          Knaben in Mozarts Zauberflöte übernahmen. Kurze Zeit später kam er in
          den Stimmbruch, sang allerdings schon 2013 wieder bei den
          Opernfestspielen Sulz Glatt den Borsa in Verdis „Rigoletto“. Des
          Weiteren wirkte er 2018 in der Oper „Street Scene“ von Kurt Weill mit,
          die vom Opernstudio der Musikhochschule Stuttgart zur Aufführung
          gebracht wurde. Im Juli 2019 war er in seiner ersten Hauptrolle als
          Orpheus bei Classic Open Wildberg in Glucks Oper „Orpheus und
          Eurydike“ zu hören. Im Februar 2020 sang er wieder als Gast der
          Opernschule Stuttgart den Cajus in Otto Nicolais Oper „Die lustigen
          Weiber von Windsor“ und im Februar 2021 den Starveling in Brittens „A
          Midsummer Night’s Dream“. Im Juli 2022 sang er bei den Münchner
          Opernfestspielen der Bayerischen Staatsoper den 5. Diener in
          „Capriccio“ von Richard Strauss.
        </p>
        <p>
          Er ist Mitglied des Sindelfinger Vokalkabinetts, des Chores Figure
          Humaine und des Stuttgarter Kammerchores.
        </p>
        <p>
          Seit dem Wintersemester 2015/16 ist Hans Jungstudent an der Hochschule
          für Musik und darstellende Kunst in Stuttgart. Zum Sommersemester 2018
          begann er dort sein Gesangsstudium bei Prof. Teru Yoshihara und
          schloss im Februar seinen Bachelor ab. Seit dem Sommersemester 2023
          studiert er dort beim gleichen Lehrer Master Konzertgesang.
        </p>
        <p>
          Bei „Jugend musiziert“ nahm er 2015 zusammen mit Jonathan Hanke in der
          Kategorie Duo Kunstlied teil und gewann einen 1. Bundespreis. Im
          darauffolgenden Jahr erreichten Hans und Inja van Soest mit Henrik
          Pfeffer aus Tübingen einen zweiten Platz im Bundeswettbewerb in der
          Kategorie Gesangsensemble. Schließlich erreichte er im
          Bundeswettbewerb 2017, wieder begleitet von Jonathan Hanke, einen 1.
          Preis - diesmal mit der Höchstpunktzahl in der Kategorie Sologesang.
          Infolgedessen verlieh ihm die Walter und Charlotte Hamel Stiftung
          einen Sonderpreis.
        </p>
      </div>
    </Content>
  </Main>
);

export default Vita;
