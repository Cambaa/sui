window.BENCHMARK_DATA = {
  "lastUpdate": 1707368689667,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b3db06fa7fc3c95ae764e2a64dd0ab01fe5945b",
          "message": "[Consensus] add basic RPC client and server (#16035)\n\n## Description \r\n\r\nSet up basic anemo client and server, using unary RPCs.\r\n\r\n## Test Plan \r\n\r\nUnit test\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-06T00:46:56Z",
          "tree_id": "aed524b3ad261f4229f49d0a9b1ea464f733769f",
          "url": "https://github.com/MystenLabs/sui/commit/9b3db06fa7fc3c95ae764e2a64dd0ab01fe5945b"
        },
        "date": 1707181010929,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 333140,
            "range": "± 23971",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113186356+Rajwanshi1@users.noreply.github.com",
            "name": "Rajwanshi1",
            "username": "Rajwanshi1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99ccaa83d31afa934b4a36e51f2892ff91ee4975",
          "message": "Compute metadata flag to optimize gas.  (#15275)\n\n## Description \r\n\r\nAdded compute_metadata flag to compute metadata only when required by\r\nthe caller. Return val for metadata has been changed to Option<T>.\r\n\r\n## Test Plan \r\n\r\nThis proposed change does'nt affect signature of any public func. Hence,\r\nexisting tests should suffice.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\n\r\nCo-authored-by: Sarthak Rajwanshi <sarthak.rajwanshi@gmail.com>\r\nCo-authored-by: patrick <patrickkuo@me.com>",
          "timestamp": "2024-02-06T12:08:54-05:00",
          "tree_id": "96f29fda158231f0738bd8621b6e80ef41c3dd82",
          "url": "https://github.com/MystenLabs/sui/commit/99ccaa83d31afa934b4a36e51f2892ff91ee4975"
        },
        "date": 1707239786201,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 371959,
            "range": "± 27281",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rvantonder@gmail.com",
            "name": "Rijnard van Tonder",
            "username": "rvantonder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2db429258728beffbcf15a72858b90e1343c4832",
          "message": "move: simplify TestPlan::new interface (refactor) (#16094)\n\n## Description \r\n\r\n`TestPlan::new` takes `AnnotatedCompiledUnit` when it only needs a subvalue\r\n`NamedCompiledModule`\r\n\r\n## Test Plan \r\n\r\nJust a refactor.\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-06T10:06:02-08:00",
          "tree_id": "ebda651db83ced1bfcb07745da7bdc39d9fc690c",
          "url": "https://github.com/MystenLabs/sui/commit/2db429258728beffbcf15a72858b90e1343c4832"
        },
        "date": 1707243202806,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 365719,
            "range": "± 30795",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f54311ed5ae8d7dccd4f0ea7ab667ad8ea03d724",
          "message": "[data ingestion] archival worker (#16039)\n\nincludes a slight change to the data ingestion interface to support the\r\nuse case. Now tasks can skip progress updates in the meta store,\r\nallowing the accumulation of state with multiple checkpoints before\r\nsaving and ensuring correct behavior during random crash/restart.\r\nNote: this workload is expected to be run with concurrency=1 only",
          "timestamp": "2024-02-06T13:08:07-05:00",
          "tree_id": "9f60654e652e02f1e36b28c27ff135e4f5cbe86b",
          "url": "https://github.com/MystenLabs/sui/commit/f54311ed5ae8d7dccd4f0ea7ab667ad8ea03d724"
        },
        "date": 1707243352859,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 386042,
            "range": "± 36526",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "halfprice@users.noreply.github.com",
            "name": "Zhe Wu",
            "username": "halfprice"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9be11951e330b33bd929e3a26d01a69e3fcf9f1",
          "message": "Overload monitor simulation tests (#16079)\n\n## Description \r\n\r\nCreate a simulation test to test overload monitor. Particularly, it\r\ntests 5 scenarios\r\n- No overload\r\n- Slightly overload\r\n- Heavy overload\r\n- Single spike\r\n- Consistent spikes\r\n\r\nThe tests use a simple load generator and executor. Both use a\r\nAuthorityState.overload_info to keep track of requests. The overload\r\nmonitor inside the same AuthorityState can be used as an overload\r\nmonitor for the load generator.\r\n\r\nThis test discovered several improvements from the previous load\r\ngenerator. Some notable ones are:\r\n- When we are already in shedding mode, say 50%, and decide to shed 10%,\r\npreviously the new shedding percentage will be 10% but it really should\r\nbe 50% + 50% * 10% = 55%.\r\n- When txn ready rate < execution rate, it doesn't mean that the\r\noverload is over. We need to protect against future spikes by only\r\ngradually reduce shedding percentage.\r\n\r\n## Test Plan \r\n\r\nSimulation tests\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-06T12:52:32-08:00",
          "tree_id": "5a63b92d78c48f85feb98f044f53e32d92aaaf92",
          "url": "https://github.com/MystenLabs/sui/commit/d9be11951e330b33bd929e3a26d01a69e3fcf9f1"
        },
        "date": 1707253198505,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 362162,
            "range": "± 26262",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3696f5f7347ccd27cc479e5ffc525eab7b4e3a37",
          "message": "Fixed sui_deny_list_object_id comment (#16101)\n\n## Description \r\n\r\nSmall doc fix\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-06T13:21:02-08:00",
          "tree_id": "03c2544331738f60b3b3afcc6d71ef483bce4bae",
          "url": "https://github.com/MystenLabs/sui/commit/3696f5f7347ccd27cc479e5ffc525eab7b4e3a37"
        },
        "date": 1707254911283,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 358607,
            "range": "± 21994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5303610174e2c3e3f3e67b758815d9c829e23bd1",
          "message": "[move 2024] Add macro functions (#15928)\n\n## Description \r\n\r\n- Added support for macros in 2024.alpha\r\n- Minor reworks to labels and blocks\r\n\r\nTODO:\r\n\r\n- [x] Decide on lambda type syntax \r\n- [x] Decide on lambda type implicit () \r\n- [x] Subst tparams inside macro body\r\n- [x] Fix lvalues for lambdas (nesting and type annots)\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [X] user-visible impact\r\n- [X] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nA set of changes for the Move compiler\r\n- macro function support has been added for 2024.alpha. \r\n- Bug fix (and minor breaking change): Move type parameters now properly\r\nrespect the rules of restricted identifiers, similar to all other names.\r\n- To support macros, the syntax for the type signature of lambdas has\r\nchanged. This will break any existing specs (which are no longer\r\nsupported) when moving to the new edition.",
          "timestamp": "2024-02-06T13:31:55-08:00",
          "tree_id": "83d6a72ae56c9fb2f81d36f7de482ceee61d746e",
          "url": "https://github.com/MystenLabs/sui/commit/5303610174e2c3e3f3e67b758815d9c829e23bd1"
        },
        "date": 1707255577696,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 352577,
            "range": "± 21966",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eeb2f07722fd1d42f9e517d75fb33e0f61b8e3cd",
          "message": "Hide all access to AuthorityStore behind the execution cache traits (#16089)\n\nAfter this change there are essentially no direct uses of the db.\r\n\r\nThere are a few exceptions, which are for things that are clearly very\r\ndb-specific, for instance pruning.",
          "timestamp": "2024-02-06T22:40:10Z",
          "tree_id": "f8ae1ac2a1b3b020b243bcec6d238ceadb808185",
          "url": "https://github.com/MystenLabs/sui/commit/eeb2f07722fd1d42f9e517d75fb33e0f61b8e3cd"
        },
        "date": 1707259656362,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 375938,
            "range": "± 31709",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae35d6a6fd814035262d98c71a5ce7ec4a984658",
          "message": "Rename in_mem_execution_cache -> execution_cache and split cache implementations into a new module (#16109)",
          "timestamp": "2024-02-06T16:53:32-08:00",
          "tree_id": "9687a5b52ad71dc5cdafcc808c0137e3f877d77c",
          "url": "https://github.com/MystenLabs/sui/commit/ae35d6a6fd814035262d98c71a5ce7ec4a984658"
        },
        "date": 1707267661691,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 368523,
            "range": "± 32093",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "987edfabbe07335ac8a10dafca3675b5a27ac236",
          "message": "generate and write bridge authority key to a file (#15916)\n\n## Description \r\n\r\nusage:\r\n\r\n```\r\n./sui-bridge-validator-cli create-bridge-validator-key {file path}\r\n```\r\n\r\n## Test Plan \r\n\r\ntested locally\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-07T01:39:49Z",
          "tree_id": "3a73f06f7df332824debc23170da1ddd843ec853",
          "url": "https://github.com/MystenLabs/sui/commit/987edfabbe07335ac8a10dafca3675b5a27ac236"
        },
        "date": 1707270425373,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 351212,
            "range": "± 16326",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d70f050c1b59f79c932ad5278ad47a2b3084a79",
          "message": "Thou shalt not convert Err => None (#16121)\n\nThe only possible source of error here is a serialization failure of the\r\nkey, so this almost certainly could not have caused a problem. Still,\r\ngood to fix.",
          "timestamp": "2024-02-07T06:38:18Z",
          "tree_id": "b14b7ba8a3d20e572b875550d63a1c5788f5fd54",
          "url": "https://github.com/MystenLabs/sui/commit/1d70f050c1b59f79c932ad5278ad47a2b3084a79"
        },
        "date": 1707288328518,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 337864,
            "range": "± 25841",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manos@mystenlabs.com",
            "name": "Manolis Liolios",
            "username": "manolisliolios"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ce29fe3fd12834a07ff024f01350bbc7a110a7c",
          "message": "[NameService] Subdomain support (#15576)\n\n## Description \r\n\r\nIndexerV2 & GraphQL logic will be carried over on the next PRs.\r\n\r\n- Adds checks for expiration on SLD names\r\n- Adds subdomain lookup & expiration checks (for both node/leaf\r\nsubdomains)\r\n- Changes error structure for easier support between the 3 crates that\r\nuse it\r\n\r\n## Test Plan \r\n\r\nAdded some unit tests and did some localnet testing for the resolution\r\naspect.\r\nNot sure if there's a better way to test this (need advise!)\r\nWill add some extra unit tests once we're good with the logic.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-07T14:55:29+02:00",
          "tree_id": "0bf1a3175af0cd962ba6b3e59f74f556dbb3b8c8",
          "url": "https://github.com/MystenLabs/sui/commit/8ce29fe3fd12834a07ff024f01350bbc7a110a7c"
        },
        "date": 1707311148611,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 353757,
            "range": "± 11915",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8832eadef61377f0e4095526611c8831b8f6c513",
          "message": "[move-debugger] Reflect updates into older execution versions (#16041)\n\n## Description \r\n\r\nReflects recent changes to the Move debugger into other execution\r\nversions.\r\n\r\n## Test Plan \r\n\r\nTested it locally",
          "timestamp": "2024-02-07T10:58:43-08:00",
          "tree_id": "0c86b3bc487e3dfca16bb19e43b837e19247b97a",
          "url": "https://github.com/MystenLabs/sui/commit/8832eadef61377f0e4095526611c8831b8f6c513"
        },
        "date": 1707332772004,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 365835,
            "range": "± 22491",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "97870774+arun-koshy@users.noreply.github.com",
            "name": "Arun Koshy",
            "username": "arun-koshy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2801352723c542b70f2e1c336841097dd04fe84f",
          "message": "[consensus] Add linearizer (#15911)\n\nThe module used to convert a list of committed leaders into the output\r\nof consensus which is an ordered list of CommittedSubDags",
          "timestamp": "2024-02-07T11:22:30-08:00",
          "tree_id": "b2124222a36445b1e251bc4342e0dac8428e1ec7",
          "url": "https://github.com/MystenLabs/sui/commit/2801352723c542b70f2e1c336841097dd04fe84f"
        },
        "date": 1707334204727,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 339876,
            "range": "± 30772",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3474723130715f7c956a704f990e0b667d22ad5e",
          "message": "[data ingestion] fix archival watermark (#16131)\n\nwith the current setup once `save_progress` returns true progress\r\nwatermark will be saved, but because we don't include currently\r\nprocessed checkpoint in the result when we cut, it will result in\r\nwatermark being off by 1. This fixes it, but resulting files might be\r\nslightly over the limit",
          "timestamp": "2024-02-07T14:46:41-05:00",
          "tree_id": "0b2a87a25978be3189d324237597c6e6052001eb",
          "url": "https://github.com/MystenLabs/sui/commit/3474723130715f7c956a704f990e0b667d22ad5e"
        },
        "date": 1707335645476,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 366619,
            "range": "± 31448",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26417d376a242d4c8e7052adab05c1089289bd1a",
          "message": "[bridge 34/n] add AssetPriceUpdate and LimitUpdate action (#16075)\n\n## Description \r\n\r\nas title\r\n\r\n## Test Plan \r\n\r\nunit tests\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-07T21:15:35Z",
          "tree_id": "9ffabd043a5e0e4d0d329f9dcc77ddd020d38bbc",
          "url": "https://github.com/MystenLabs/sui/commit/26417d376a242d4c8e7052adab05c1089289bd1a"
        },
        "date": 1707340958688,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 352025,
            "range": "± 23313",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb9d0f4e478aab655031f8a11251138220bc2d49",
          "message": "Remove next-vm execution branch (#16135)\n\n## Description \r\n\r\nRemove the next-vm execution branch as it was just causing pain without\r\nany benefit.\r\n\r\n## Test Plan \r\n\r\nNot used, so free to delete.",
          "timestamp": "2024-02-07T14:43:19-08:00",
          "tree_id": "ce65ac00cf66e861025ba9aa06a4d1a171d4a401",
          "url": "https://github.com/MystenLabs/sui/commit/bb9d0f4e478aab655031f8a11251138220bc2d49"
        },
        "date": 1707346315127,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 336117,
            "range": "± 25654",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "435869aac512032c7c82ad908952f2a64d0d6195",
          "message": "[bridge 35/n] update function family get_action_onchain_status (#16074)\n\n## Description \r\n\r\n`source_chain_id` is a bit confusing concept. This PR de-ambiguates it\r\nand updates some functions to only handle token bridge actions.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-07T14:44:10-08:00",
          "tree_id": "caf52c90eabb18f28172d9ecdbced72e436aca9e",
          "url": "https://github.com/MystenLabs/sui/commit/435869aac512032c7c82ad908952f2a64d0d6195"
        },
        "date": 1707346425406,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 338090,
            "range": "± 18887",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameronswords@gmail.com",
            "name": "Cam Swords",
            "username": "cgswords"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5e96cd1f0ceaf7dd682b721fa95e7358c23b3ce",
          "message": "[move] Make most ICEs diagnostics (#16124)\n\n## Description \r\n\r\nThe compiler has a number of panics when things have gone wrong. This\r\ntries to remediate a large number of them to return some sort of error\r\nto allow compilation to continue, plus report it as a bug.\r\n\r\nIt's unclear if this will make development easier, but I think it is\r\noverall a situation we should move toward to helps when users stumble\r\ninto these. If there are any specific panics we'd like to reinstate,\r\nplease call them out.\r\n\r\n## Test Plan \r\n\r\nThe test suite behavior should not change. \r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-07T14:49:21-08:00",
          "tree_id": "5d0c6b3d825ce341e5d71a98badd921aee1c52b2",
          "url": "https://github.com/MystenLabs/sui/commit/d5e96cd1f0ceaf7dd682b721fa95e7358c23b3ce"
        },
        "date": 1707346864143,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 347126,
            "range": "± 19034",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2824495daedadb3375d03e61149c5eaf6f7aba3d",
          "message": "[bridge 36/n] add EvmContractUpgradeAction (#16090)\n\n## Description \r\n\r\nas title\r\n\r\n## Test Plan \r\n\r\nunit tests\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-02-07T23:07:46Z",
          "tree_id": "3d79d4b70cb58524108f63baab3dd30e08648178",
          "url": "https://github.com/MystenLabs/sui/commit/2824495daedadb3375d03e61149c5eaf6f7aba3d"
        },
        "date": 1707347836470,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 366415,
            "range": "± 28948",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam@mystenlabs.com",
            "name": "Adam Welc",
            "username": "awelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a2a63c0a0122433e70a0a086aa8a0b95f2a5bbe",
          "message": "[move-ide] Refactoring to reduce memory footprint and prepare for new features (#16116)\n\n## Description \r\n\r\nThis is mainly a refactoring with a small change to how constants are\r\ndisplayed (to include their defining module).\r\n\r\nThe refactoring started while attempting to implement a new feature but\r\nit was deemed a better idea to create a separate PR for it. In addition\r\nto enabling a new feature, it also reduces memory consumption by storing\r\nadditional information for definitions on the side instead of inlining\r\nthem in the `UseDef` structure - we moved `IdentOnHover` (now called\r\n`DefInfo` as it will be used for other things as well) to a separate\r\nmap.\r\n\r\n\r\n## Test Plan \r\n\r\nAll existing tests (after new constant display adjustment) pass.",
          "timestamp": "2024-02-07T16:06:15-08:00",
          "tree_id": "9d09c71d8b9a079e40d6ac58e1b6c0adfc3304ee",
          "url": "https://github.com/MystenLabs/sui/commit/4a2a63c0a0122433e70a0a086aa8a0b95f2a5bbe"
        },
        "date": 1707351204049,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 347608,
            "range": "± 15885",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b54be8e8aa4546981848dfaac4dadcd478c8580",
          "message": "[gql] add owner_type to balance query (#16137)",
          "timestamp": "2024-02-07T15:24:23-10:00",
          "tree_id": "e76467789461e96fe3a515d1cbb8b3b00a83be58",
          "url": "https://github.com/MystenLabs/sui/commit/6b54be8e8aa4546981848dfaac4dadcd478c8580"
        },
        "date": 1707355931729,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 343628,
            "range": "± 39351",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2df8afc834276fd8723ab3f37a3af270bd5d1d2",
          "message": "More state sync logs (#16115)",
          "timestamp": "2024-02-08T04:56:26Z",
          "tree_id": "3a7bb5f1fa8d325db4605fa1ef5729bc1df4a191",
          "url": "https://github.com/MystenLabs/sui/commit/d2df8afc834276fd8723ab3f37a3af270bd5d1d2"
        },
        "date": 1707368687227,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 359404,
            "range": "± 23636",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}