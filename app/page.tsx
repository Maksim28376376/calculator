import WorldMap from "./WorldMap";
import { countries, totalFighters } from "./data";

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <p className="eyebrow">MMA · Data Map</p>
        <h1 className="title">UFC Fighters by Country</h1>
        <p className="subtitle">
          Where the UFC roster comes from. Redder countries send more fighters
          to the octagon — hover for a count, or select a country to read about
          its scene.
        </p>
        <div className="stats">
          <div className="stat">
            <span className="statValue">{countries.length}</span>
            <span className="statLabel">countries represented</span>
          </div>
          <div className="stat">
            <span className="statValue">
              ~{totalFighters.toLocaleString()}
            </span>
            <span className="statLabel">fighters mapped</span>
          </div>
        </div>
      </header>

      <WorldMap />

      <p className="footnote">
        Counts are approximate, representative figures meant to show each
        country&rsquo;s relative UFC presence — not an exact, official roster
        headcount. Fighters are grouped by nation of origin; many compete out of
        gyms in other countries.
      </p>
    </main>
  );
}
