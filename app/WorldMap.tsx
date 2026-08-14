"use client";

import { useMemo, useRef, useState } from "react";
import { feature } from "topojson-client";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import type { FeatureCollection, Geometry } from "geojson";
// Bundled locally so the map has no external/CDN dependency at runtime.
import topo from "world-atlas/countries-110m.json";
import styles from "./WorldMap.module.css";
import {
  byId,
  colorFor,
  buckets,
  NO_DATA_COLOR,
  countries,
} from "./data";
import { fighters } from "./fighters";
import FighterAvatar from "./FighterAvatar";

// Antarctica dominates the frame and carries no data, so we drop it before
// fitting the projection — the inhabited world then fills the viewport.
const ANTARCTICA_ID = "010";

type RenderedPath = { id: string; d: string; name: string };
type Hovered = { id: string; name: string } | null;

export default function WorldMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<Hovered>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [fighterOpen, setFighterOpen] = useState(false);
  const [tip, setTip] = useState<{ x: number; y: number } | null>(null);

  // Selecting a country opens the fighter panel; the close button just hides it.
  function selectCountry(id: string) {
    setSelectedId(id);
    setFighterOpen(true);
  }

  const paths = useMemo<RenderedPath[]>(() => {
    const fc = feature(
      topo as never,
      (topo as never as { objects: { countries: unknown } }).objects.countries as never
    ) as unknown as FeatureCollection<Geometry, { name?: string }>;

    const feats = fc.features.filter(
      (f) => String(f.id) !== ANTARCTICA_ID
    );

    const projection = geoNaturalEarth1().fitExtent(
      [
        [6, 6],
        [954, 496],
      ],
      { type: "FeatureCollection", features: feats } as FeatureCollection
    );
    const path = geoPath(projection);

    return feats.map((f) => ({
      id: String(f.id),
      d: path(f) ?? "",
      name: f.properties?.name ?? "Unknown",
    }));
  }, []);

  const ranked = useMemo(
    () => [...countries].sort((a, b) => b.count - a.count),
    []
  );
  const rankOf = useMemo(() => {
    const m = new Map<string, number>();
    ranked.forEach((c, i) => m.set(c.id, i + 1));
    return m;
  }, [ranked]);

  const selected = selectedId ? byId.get(selectedId) ?? null : null;
  const activeId = hovered?.id ?? selectedId;

  function moveTip(e: React.MouseEvent) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  const hoveredCount = hovered ? byId.get(hovered.id)?.count : undefined;

  const fighter =
    selectedId && fighterOpen ? fighters[selectedId] ?? null : null;
  const fighterCountry = selectedId ? byId.get(selectedId) : undefined;

  return (
    <div className={styles.layout}>
      {/* Left slide-in panel: the country's most famous fighter as an anime
          character, with a short bio and a career fact. */}
      <div
        className={`${styles.fighterPanel} ${
          fighter ? styles.fighterOpen : ""
        }`}
        aria-hidden={!fighter}
      >
        {fighter && (
          <>
            <button
              type="button"
              className={styles.fighterClose}
              onClick={() => setFighterOpen(false)}
              aria-label="Close fighter"
            >
              ×
            </button>
            <div className={styles.fighterArt}>
              <FighterAvatar look={fighter.look} className={styles.avatar} />
            </div>
            <div className={styles.fighterInfo}>
              <span className={styles.fighterFlagline}>
                Most famous from {fighterCountry?.name}
              </span>
              <h2 className={styles.fighterName}>{fighter.name}</h2>
              <p className={styles.fighterBio}>{fighter.bio}</p>
              <div className={styles.factCard}>
                <span className={styles.factLabel}>Career fact</span>
                <p className={styles.factText}>{fighter.fact}</p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={styles.mapCard}>
        <div
          className={styles.mapWrap}
          ref={wrapRef}
          onMouseMove={moveTip}
          onMouseLeave={() => {
            setHovered(null);
            setTip(null);
          }}
        >
          <svg
            viewBox="0 0 960 502"
            className={styles.svg}
            role="img"
            aria-label="World map shaded by number of UFC fighters per country"
          >
            {paths.map((p, i) => {
              const data = byId.get(p.id);
              // Some atlas shapes (Kosovo, N. Cyprus…) lack an ISO id, so the
              // render key is index-suffixed to stay unique; data lookups still
              // use the real id.
              const isActive = data != null && activeId === p.id;
              const isSelected = selectedId === p.id;
              return (
                <path
                  key={`${p.id}-${i}`}
                  d={p.d}
                  fill={colorFor(data?.count)}
                  className={[
                    styles.country,
                    data ? styles.hasData : "",
                    isActive ? styles.active : "",
                    isSelected ? styles.selected : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onMouseEnter={(e) => {
                    setHovered({ id: p.id, name: data?.name ?? p.name });
                    moveTip(e);
                  }}
                  onClick={() => data && selectCountry(p.id)}
                />
              );
            })}
          </svg>

          {hovered && tip && (
            <div
              className={styles.tooltip}
              style={{ left: tip.x, top: tip.y }}
            >
              <span className={styles.tipName}>{hovered.name}</span>
              <span className={styles.tipCount}>
                {hoveredCount
                  ? `~${hoveredCount} UFC fighter${hoveredCount === 1 ? "" : "s"}`
                  : "No UFC fighters on record"}
              </span>
            </div>
          )}
        </div>

        <div className={styles.legend}>
          <span className={styles.legendTitle}>Fighters</span>
          {buckets.map((b) => (
            <span key={b.label} className={styles.legendItem}>
              <span
                className={styles.swatch}
                style={{ background: b.color }}
              />
              {b.label}
            </span>
          ))}
          <span className={styles.legendItem}>
            <span
              className={styles.swatch}
              style={{ background: NO_DATA_COLOR }}
            />
            none
          </span>
        </div>
      </div>

      <aside className={styles.side}>
        <div className={styles.detail}>
          {selected ? (
            <>
              <div className={styles.detailHead}>
                <span className={styles.rankBadge}>
                  #{rankOf.get(selected.id)}
                </span>
                <h2 className={styles.detailName}>{selected.name}</h2>
              </div>
              <div className={styles.bigCount}>
                ~{selected.count.toLocaleString()}
                <span className={styles.bigCountLabel}>UFC fighters</span>
              </div>
              <p className={styles.blurb}>{selected.blurb}</p>
            </>
          ) : (
            <div className={styles.detailEmpty}>
              <p className={styles.detailEmptyLead}>
                Select a country
              </p>
              <p className={styles.detailEmptyText}>
                Hover the map for a quick count, or pick a country here or on
                the map to read about its UFC scene.
              </p>
            </div>
          )}
        </div>

        <div className={styles.listWrap}>
          <div className={styles.listHead}>
            <span>Country</span>
            <span>Fighters</span>
          </div>
          <ul className={styles.list}>
            {ranked.map((c, i) => (
              <li key={c.id}>
                <button
                  type="button"
                  className={[
                    styles.row,
                    selectedId === c.id ? styles.rowActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => selectCountry(c.id)}
                  onMouseEnter={() => {
                    // Highlight the country on the map, but don't float a
                    // map tooltip while the pointer is over the list.
                    setHovered({ id: c.id, name: c.name });
                    setTip(null);
                  }}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className={styles.rowRank}>{i + 1}</span>
                  <span
                    className={styles.rowSwatch}
                    style={{ background: colorFor(c.count) }}
                  />
                  <span className={styles.rowName}>{c.name}</span>
                  <span className={styles.rowCount}>
                    {c.count.toLocaleString()}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
